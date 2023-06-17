import { timeDificult } from '@/utils/levelUtils'
import { GameFunctions } from '../interfaces'

export const finishGame = ({
  upDateTime,
  upDateGameStatus,
  viewConfetti,
  dificult,
}: GameFunctions): void => {
  upDateGameStatus('finish')
  upDateTime(timeDificult[dificult])
  viewConfetti()
}
