import { timeDificult } from '@/utils/levelUtils'
import { GameFunctions } from '../interfaces'

export const finishGame = ({
  setStatus,
  setTime,
  viewConfetti,
}: GameFunctions): void => {
  setStatus('finish')
  setTime(timeDificult['normal'])
  viewConfetti()
}
