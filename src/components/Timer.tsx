import { useEffect } from 'react'
import { finishGame } from '../helpers/finishGame'
import { PropsTimer } from '../interfaces'
import {
  useDificultStore,
  useStatusStore,
  useTimeStore,
} from '@/app/store/colorsStore'

const Timer = ({ viewConfetti }: PropsTimer) => {
  //incremental time

  const { status, upDateGameStatus } = useStatusStore()
  const { dificult, upDateDificult } = useDificultStore()
  const { time, upDateTime } = useTimeStore()
  useEffect(() => {
    if (time === 0) {
      finishGame({ upDateTime, upDateGameStatus, viewConfetti, dificult })
    }
    if (status === 'playing') {
      const interval = setInterval(() => {
        upDateTime()
      }, 1000)

      return () => {
        clearInterval(interval)
      }
    }
  }, [status, , time, upDateTime, viewConfetti, upDateGameStatus, dificult])

  return <div>{time} segundos</div>
}

export default Timer
