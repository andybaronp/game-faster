import { useEffect } from 'react'
import { finishGame } from '../helpers/finishGame'
import { PropsTimer } from '../interfaces'
import {
  useDificultStore,
  useScoreStore,
  useStatusStore,
  useTimeStore,
} from '@/app/store/colorsStore'

const Timer = ({ viewConfetti }: PropsTimer) => {
  //incremental time

  const { status, upDateGameStatus } = useStatusStore()
  const { dificult } = useDificultStore()
  const { time, upDateTime } = useTimeStore()
  const { score } = useScoreStore()
  useEffect(() => {
    if (time === 0) {
      finishGame({
        upDateTime,
        upDateGameStatus,
        viewConfetti,
        dificult,
        score,
      })
    }
    if (status === 'playing') {
      const interval = setInterval(() => {
        upDateTime()
      }, 1000)

      return () => {
        clearInterval(interval)
      }
    }
  }, [
    status,
    ,
    time,
    upDateTime,
    viewConfetti,
    upDateGameStatus,
    dificult,
    score,
  ])

  return <div>{time} segundos</div>
}

export default Timer
