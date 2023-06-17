import {
  useDificultStore,
  useScoreStore,
  useStatusStore,
  useTimeStore,
} from '@/app/store/colorsStore'
import { options, timeDificult } from '../utils/levelUtils'

const DificultSelect = () => {
  const { status } = useStatusStore()
  const { dificult, upDateDificult } = useDificultStore()
  const { upDateTime } = useTimeStore()
  const { upDateScore } = useScoreStore()

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    if (value === 'normal' || value === 'medium' || value === 'hard') {
      upDateDificult(value)
      upDateTime(timeDificult[value])
      upDateScore('reset')
    }
  }
  return (
    <select
      disabled={status === 'playing'}
      className='px-2 py-1 text-sm font-medium delay-150 bg-yellow-300 rounded-md outline-none cursor-pointer sm:px-6'
      onChange={handleSelectChange}
      value={dificult}
    >
      {options.map((option) => (
        <option
          key={option.value}
          className='font-medium bg-yellow-300 rounded-md shadow-xl '
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default DificultSelect
