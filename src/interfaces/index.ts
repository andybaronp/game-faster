export interface TimeDificult {
  normal: number
  medium: number
  hard: number
}

export interface Color {
  name: string
  bgcolor: string
  textColor: string
}

export interface PointsDificult {
  normal: number
  medium: number
  hard: number
}

export interface PropsTimer {
  status: 'initial' | 'playing' | 'finish'
  time: number
  dificult: 'normal' | 'medium' | 'hard'
  setTime: React.Dispatch<React.SetStateAction<number>>
  setStatus: React.Dispatch<
    React.SetStateAction<'initial' | 'playing' | 'finish'>
  >
  viewConfetti: () => void
}

export interface GameFunctions {
  dificult: 'normal' | 'medium' | 'hard'

  setTime: React.Dispatch<React.SetStateAction<number>>
  setStatus: React.Dispatch<
    React.SetStateAction<'initial' | 'playing' | 'finish'>
  >
  viewConfetti: () => void
}

export interface Option {
  value: string
  label: string
}

export interface ColorsDificult {
  normal: Color[]
  medium: Color[]
  hard: Color[]
}
