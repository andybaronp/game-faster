import { timeDificult } from '@/utils/levelUtils'
import { GameFunctions } from '../interfaces'

export const finishGame = ({
  setStatus,
  setTime,
  viewConfetti,
  dificult,
}: GameFunctions): void => {
  setStatus('finish')
  setTime(timeDificult[dificult])
  viewConfetti()
}
