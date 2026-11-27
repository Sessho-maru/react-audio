import { createContext } from "react";
import { type IAudioMetadata } from 'music-metadata';

export type Cue = {
  now: number;
  next: number;
}

export type AudioCueContextValue = {
  currentCue: Cue;
  isNowPlaying: boolean;
  metadata: IAudioMetadata;
  updateFiles: (fileList: FileList) => Promise<void>;
  togglePlayback: () => void;
  updateCue: (cue: Cue) => void;
}

export const AudioCueContext = createContext<AudioCueContextValue | null>(null);
