'use client'
import Link from 'next/link'
import Score from './Score'
import Timer from './Timer'
import { useScoreStore, useStatusStore } from '@/app/store/colorsStore'
import DificultSelect from './DificultSelect'
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
const Navbar = () => {
  const { status, upDateGameStatus } = useStatusStore()
  const { upDateScore } = useScoreStore()

  return (
    <nav className='flex flex-col flex-wrap items-center justify-center gap-5 sm:gap-20 sm:flex-row'>
      {status === 'playing' && (
        <button
          className='px-3 py-1 text-sm font-medium delay-150 rounded-md bg-cyan-400 hover:scale-105 hover:bg-yellow-400'
          onClick={() => {
            upDateScore('reset')
            upDateGameStatus('initial')
          }}
        >
          Reiniciar
        </button>
      )}
      <div className='flex flex-col items-center justify-center gap-5 text-3xl font-bold text-white sm:gap-20 sm:flex-row '>
        {status === 'playing' && (
          <>
            <Score />
            <Timer viewConfetti={viewConfetti} />
          </>
        )}
      </div>
      <div className='flex gap-2 -order-1 sm:order-1 '>
        <Link
          href='/'
          passHref
          onClick={() => {
            upDateScore('reset')
            upDateGameStatus('initial')
          }}
        >
          <div className='px-2 py-1 text-sm font-bold border border-yellow-300 rounded-md text-cyan-300'>
            Inicio
          </div>
        </Link>
        <div className='relative'>
          <span className='absolute -right-2 -top-4 rotate-12'>🎮</span>
          <div className='px-2 py-1 text-sm font-bold text-white border border-yellow-300 rounded-md '>
            {/* {name} */}PEPITO
          </div>
        </div>
        <DificultSelect />
        <Link
          href='/colors'
          passHref
          className='px-2 py-1 text-sm font-medium delay-150 bg-yellow-300 rounded-md sm:px-6 hover:scale-105 hover:bg-yellow-400'
        >
          Colores
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
