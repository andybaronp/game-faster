import {
  colorsDifult,
  options,
  pointsDificult,
  timeDificult,
} from '../utils/levelUtils'
interface Props {
  dificult: 'normal' | 'medium' | 'hard'
}
const ItemsGame = ({ dificult }: Props) => {
  return (
    <section className='p-3 sm:h-full '>
      <h4 className='text-xl text-center sm:text-4xl'>
        Dificultades del nivel{' '}
        <span className='font-medium text-yellow-300 uppercase'>
          {options.find((option) => option.value === dificult)?.label}
        </span>
      </h4>
      <div className='flex flex-col items-center justify-center w-full h-full gap-3 text-center'>
        <p className='text-lg font-medium sm:text-3xl'>Colores</p>
        <div className='flex flex-wrap items-center justify-center w-full gap-2'>
          {colorsDifult[dificult].map((color, index) => {
            return (
              <div
                key={index}
                className={`${color.bgcolor} w-10 h-10 border border-gray-500 rounded`}
              ></div>
            )
          })}
        </div>
        <div>
          <p className='text-lg font-medium sm:text-3xl'>
            Tiempo{' '}
            <span className='text-yellow-300'>{timeDificult[dificult]}</span>
          </p>
        </div>
        <div>
          <p className='text-lg font-medium sm:text-3xl'>
            Penalización por falla{' '}
            <span className='text-yellow-300'>{pointsDificult[dificult]}</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default ItemsGame
