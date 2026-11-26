import { useContext } from 'react'
import { AudioCueContext } from './context'

export const useAudioCue = () => {
  const context = useContext(AudioCueContext)

  if (context === null) {
    throw new Error('Out of Context')
  }

  return context
}