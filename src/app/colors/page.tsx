'use client'
import ItemsGame from '@/components/ItemsGame'
import Score from '@/components/Score'
import { Color } from '@/interfaces'
import { colorsDifult, pointsDificult } from '@/utils/levelUtils'
import { useState } from 'react'
import {
  useDificultStore,
  useScoreStore,
  useStatusStore,
} from '../store/colorsStore'

function ColorPage() {
  const { score, upDateScore } = useScoreStore()
  const { status, upDateGameStatus } = useStatusStore()
  const { dificult } = useDificultStore()

  const [color, setColor] = useState<Color | null>(null)
  const [colorsGaming, setColorsGaming] = useState<Color[]>([])

  //Inicia el juego
  const handlePlay = () => {
    upDateGameStatus('playing')
    const [color, wrongColor] = colorsDifult[dificult]
      .slice()
      .sort(() => Math.random() - 0.5)
    setColor(color)
    setColorsGaming([color, wrongColor].slice().sort(() => Math.random() - 0.5))
  }

  // Selecciona el de Color
  const handleColorClick = (colorS: Color) => {
    if (colorS.name === color?.name) {
      upDateScore(1)
      handlePlay()
    } else {
      handlePlay()
      if (score === 0) return
      if (score === 1) {
        upDateScore('reset')
        return
      }
      upDateScore(-pointsDificult[dificult])
    }
  }

  return (
    <section className='flex flex-col items-center justify-between w-full h-full p-3 pt-40'>
      <div className='flex flex-col justify-between '>
        {status === 'initial' && <ItemsGame dificult={dificult} />}
        {status === 'playing' && (
          <div
            className={`text-5xl sm:text-7xl font-black uppercase ${colorsGaming[0].textColor}`}
          >
            {color?.name}
          </div>
        )}
        {status === 'finish' && (
          <div className='flex flex-col items-center justify-center text-3xl font-bold text-white sm:gap-20 '>
            <Score />
          </div>
        )}
      </div>
      <footer className=''>
        {status === 'initial' && (
          <div className=''>
            <button
              className='px-3 py-1 text-sm font-medium delay-150 bg-yellow-300 rounded-md sm:py-2 sm:px-6 hover:scale-105 hover:bg-yellow-400'
              onClick={handlePlay}
            >
              Iniciar
            </button>
          </div>
        )}
        {status === 'playing' && color && (
          <div className='mx-auto '>
            <div className={`flex gap-x-5`}>
              <button
                onClick={() => handleColorClick(colorsGaming[0])}
                className={`w-24 sm:w-32 py-8 max-w-xs      rounded-md ${colorsGaming[0].bgcolor} text-base sm:text-2xl font-medium text-slate-800 uppercase ${colorsGaming[1].textColor} `}
              >
                {colorsGaming[1].name}
              </button>
              <button
                onClick={() => handleColorClick(colorsGaming[1])}
                className={` w-24 sm:w-32 py-8 max-w-xs  rounded-md ${colorsGaming[1].bgcolor} text-base sm:text-2xl font-medium text-slate-800 uppercase ${colorsGaming[0].textColor}`}
              >
                {colorsGaming[0].name}
              </button>
            </div>
          </div>
        )}
        {status === 'finish' && (
          <div className='flex flex-col items-center justify-center text-3xl font-bold text-white sm:gap-20 '>
            <button
              className='px-3 py-1 text-sm font-medium text-black delay-150 bg-yellow-300 rounded-md sm:py-2 sm:px-6 hover:scale-105 hover:bg-yellow-400'
              onClick={() => {
                upDateScore('reset')
                handlePlay()
              }}
            >
              Volver a jugar
            </button>
          </div>
        )}
      </footer>
    </section>
  )
}

export default ColorPage
