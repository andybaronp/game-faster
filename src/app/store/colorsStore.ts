import { timeDificult } from '@/utils/levelUtils'
import { create } from 'zustand'

interface ScoreStore {
  score: number
  upDateScore: (score: number | 'reset') => void
}

interface GameStatusStore {
  status: 'initial' | 'playing' | 'finish'
  upDateGameStatus: (status: 'initial' | 'playing' | 'finish') => void
}

interface DificultStore {
  dificult: 'normal' | 'medium' | 'hard'
  upDateDificult: (status: 'normal' | 'medium' | 'hard') => void
}
interface TimeStore {
  time: number
  upDateTime: (timeReset?: number) => void
}
//Score
export const useScoreStore = create<ScoreStore>((set) => ({
  score: 0,
  upDateScore: (value) =>
    set((state) => ({ score: value === 'reset' ? 0 : state.score + value })),
}))

// Status Game
export const useStatusStore = create<GameStatusStore>((set) => ({
  status: 'initial',
  upDateGameStatus: (gameState) => set({ status: gameState }),
}))
// Dificult
export const useDificultStore = create<DificultStore>((set) => ({
  dificult: 'normal',
  upDateDificult: (gameState) => set({ dificult: gameState }),
}))
// Timer
export const useTimeStore = create<TimeStore>((set) => ({
  // time: timeDificult['normal'],
  time: 123123,
  upDateTime: (timeReset?: number) => {
    set((state) => ({
      time: timeReset !== undefined ? timeReset : state.time - 1,
    }))
  },
}))
