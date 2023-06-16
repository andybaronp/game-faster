'use client'
import DificultSelect from '@/components/DificultSelect'
import ItemsGame from '@/components/ItemsGame'
import ModalName from '@/components/ModalName'
import Score from '@/components/Score'
import Timer from '@/components/Timer'
import { Color } from '@/interfaces'
import { timeDificult, colorsDifult, pointsDificult } from '@/utils/levelUtils'
import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'

const viewConfetti = () => {
  // Efecto confeti
  confetti({
    zIndex: 999,
    particleCount: 100,
    spread: 100,
    angle: 110,
    origin: {
      x: 0.5,
      y: 0.5,
    },
  })
}

function ColorPage() {
  const [status, setStatus] = useState<'initial' | 'playing' | 'finish'>(
    'initial',
  )
  const name = 'player'
  const [dificult, setDificult] = useState<'normal' | 'medium' | 'hard'>(
    'normal',
  )
  const [hidden, setHidden] = useState<string>('hidden')
  const [time, setTime] = useState<number>(timeDificult['normal'])
  const [score, setScore] = useState<number>(0)
  const [color, setColor] = useState<Color | null>(null)
  const [colorsGaming, setColorsGaming] = useState<Color[]>([])

  //Selección de dificultad
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    if (value === 'normal' || value === 'medium' || value === 'hard') {
      setDificult(value)
      setTime(timeDificult[value])
    }
  }
  //Inicia el juego
  const handlePlay = () => {
    setStatus('playing')
    const [color, wrongColor] = colorsDifult[dificult]
      .slice()
      .sort(() => Math.random() - 0.5)
    setColor(color)
    setColorsGaming([color, wrongColor].slice().sort(() => Math.random() - 0.5))
  }

  // Selecciona el de Color
  const handleColorClick = (colorS: Color) => {
    if (colorS.name === color?.name) {
      setScore(score + 1)
      handlePlay()
    } else {
      handlePlay()
      if (score === 0) return
      if (score === 1) {
        setScore(0)
        return
      }
      setScore(score - pointsDificult[dificult])
    }
  }
  // Evalua si hay un nombre de jugador
  useEffect(() => {
    if (name === null || name === undefined) {
      setHidden('')
    }
  }, [name])

  if (hidden === '') return <ModalName setHidden={setHidden} hidden={hidden} />

  return (
    <section className='flex flex-col items-center justify-between h-full p-3 '>
      <nav className='flex flex-col flex-wrap items-center justify-center gap-5 sm:gap-20 sm:flex-row'>
        {status === 'playing' && (
          <button
            className='px-3 py-1 text-sm font-medium delay-150 rounded-md bg-cyan-400 hover:scale-105 hover:bg-yellow-400'
            onClick={() => {
              setScore(0)
              setStatus('initial')
            }}
          >
            Reiniciar
          </button>
        )}
        <div className='flex flex-col items-center justify-center gap-5 text-3xl font-bold text-white sm:gap-20 sm:flex-row '>
          {status === 'playing' && (
            <>
              <Score score={score} key={score} />
              <Timer
                viewConfetti={viewConfetti}
                status={status}
                time={time}
                setTime={setTime}
                setStatus={setStatus}
              />
            </>
          )}
        </div>
        <div className='flex gap-2 -order-1 sm:order-1 '>
          <div className='relative'>
            <span className='absolute -right-2 -top-4 rotate-12'>🎮</span>
            <div className='px-2 py-1 text-sm font-bold text-white border border-yellow-300 rounded-md '>
              {name}
            </div>
          </div>
          <DificultSelect
            status={status}
            dificult={dificult}
            handleSelectChange={handleSelectChange}
          />
          <button className='px-2 py-1 text-sm font-medium delay-150 bg-yellow-300 rounded-md sm:px-6 hover:scale-105 hover:bg-yellow-400'>
            Colores
          </button>
        </div>
      </nav>

      <main className='flex flex-col justify-between '>
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
            <Score score={score} key={score} />
          </div>
        )}
      </main>
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
                setScore(0)
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
