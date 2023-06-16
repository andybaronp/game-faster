import { useEffect } from 'react'
import { finishGame } from '../helpers/finishGame'
import { PropsTimer } from '../interfaces'

const Timer = ({
  status,
  setTime,
  time,
  setStatus,
  viewConfetti,
  setScore,
  dificult,
}: PropsTimer) => {
  //incremental time
  useEffect(() => {
    if (time === 0) {
      finishGame({ setTime, setStatus, viewConfetti, setScore, dificult })
    }
    if (status === 'playing') {
      const interval = setInterval(() => {
        setTime((tim) => tim - 1)
      }, 1000)

      return () => {
        clearInterval(interval)
      }
    }
  }, [status, setTime, setStatus, time, viewConfetti, setScore, dificult])

  return <div>{time} segundos</div>
}

export default Timer
