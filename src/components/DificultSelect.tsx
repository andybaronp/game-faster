import { options } from '../utils/levelUtils'

interface Props {
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  dificult: string
  status: string
}
const DificultSelect = ({ handleSelectChange, dificult, status }: Props) => {
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
