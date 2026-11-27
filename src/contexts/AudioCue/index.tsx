import { useEffect, useRef, useState, type ReactNode } from 'react'
import { AudioCueContext, type Cue } from './context';
import { parseBlob, type IAudioMetadata } from 'music-metadata';

export const AudioCueProvider = ({ children }: { children: ReactNode }) => {
  const [currentCue, setCurrentCue]  = useState<Cue>({ now: 0, next: 0 });
  const [isNowPlaying, setIsNowPlaying] = useState<boolean>(false);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [isRepeat, setIsRepeat] = useState<boolean>(false);

  const filesRef = useRef<File[]>([]);
  const metadataRef = useRef({} as IAudioMetadata);
  const audioRef = useRef<HTMLAudioElement>(new Audio());

  const pausedAtRef = useRef<number>(0);
  const timeoutRef = useRef<number>(0);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    }
  }, [])

  useEffect(() => {
    if (currentCue && isNowPlaying) {
      forward(currentCue.now);
    }
  }, [currentCue]);

  const forward = async (now: number) => {
    if (pausedAtRef.current !== 0) {
      return;
    }

    audioRef.current.src = URL.createObjectURL(filesRef.current[now]);
    audioRef.current.play();
    pausedAtRef.current = 0;

    await new Promise<void>((resolve) => setTimeout(resolve, 100));

    cueNext();
  }

  const cueNext = (timeElapsed: number = 0) => {
    clearTimeout(timeoutRef.current);
    
    if (currentCue.next > filesRef.current.length - 1 || currentCue.next === 0) {
      return;
    }

    timeoutRef.current = setTimeout(() => {
      switch (true) {
        case isShuffle: {
				  break;
        }
        case isRepeat: {
          break;
        }
        default: {
          pausedAtRef.current = 0;
          setCurrentCue(prev => (
            { now: prev.next, next: prev.next + 1 }
          ));
          break;
        }
      }
    }, ((audioRef.current.duration - timeElapsed) * 1000) / 20);
  }

  const updateFiles = async (fileList: FileList) => {
    filesRef.current = [...filesRef.current, ...Array.from(fileList)];

    if (isEmptyAudio()) {
      return;
    }

    const next = Math.min(currentCue.now + 1, filesRef.current.length - 1)

    metadataRef.current = await parseBlob(filesRef.current[currentCue.now]);
    audioRef.current.src = URL.createObjectURL(filesRef.current[currentCue.now]);

    setCurrentCue({ now: currentCue.now, next });
  }

  const togglePlayback = () => {
    if (isEmptyAudio()) {
      return;
    }

    switch (isNowPlaying) {
      case true: {
        clearTimeout(timeoutRef.current)

        audioRef.current.pause();
        pausedAtRef.current = audioRef.current.currentTime;

        setIsNowPlaying(false);
        break;
      }
      case false: {
        if (audioRef.current.src) {
          audioRef.current.play();
          cueNext(pausedAtRef.current);
          setIsNowPlaying(true);
        }
        break;
      }
    }
  }

  const stop = () => {
    clearTimeout(timeoutRef.current);

    audioRef.current.pause();
    pausedAtRef.current = 0;

    setCurrentCue({ now: 0, next: 0 });
    setIsNowPlaying(false);
  }

  const updateCue = (cue: Cue) => setCurrentCue({ ...cue });

  const isEmptyAudio = () => filesRef.current.length === 0;

  return (
    <AudioCueContext
      value={{ 
        currentCue,
        isNowPlaying,
        metadata: metadataRef.current,
        updateFiles,
        togglePlayback,
        updateCue,
      }}
    >
      {children}
    </AudioCueContext>
  )
}
