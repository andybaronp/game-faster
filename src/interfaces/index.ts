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
  viewConfetti: () => void
}

export interface GameFunctions {
  upDateTime: (timeReset?: number) => void
  upDateGameStatus: (status: 'initial' | 'playing' | 'finish') => void
  viewConfetti: () => void
  dificult: 'normal' | 'medium' | 'hard'
  score: number
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
