'use client'
import { useState } from 'react'
import Link from 'next/link'
import Score from './Score'
import Timer from './Timer'
import { useScoreStore, useStatusStore } from '@/app/store/colorsStore'
import DificultSelect from './DificultSelect'
import confetti from 'canvas-confetti'
import Image from 'next/image'

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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='flex flex-wrap items-center justify-between w-full gap-5 '>
      {/* Logo and name */}
      <div className='flex items-center flex-shrink-0 gap-5 text-white'>
        <button
          onClick={() => {
            upDateScore('reset')
            upDateGameStatus('initial')
          }}
          className='cursor-pointer'
        >
          <Link href='/'>
            <Image src='/logo.svg' alt='logo' width={45} height={40} />
          </Link>
        </button>
        <div className='relative'>
          <span className='absolute -right-2 -top-4 rotate-12'>🎮</span>
          <div className='px-2 py-1 text-sm font-bold text-white border rounded-md border-cyan-300'>
            {/* {name} */}PEPITO
          </div>
        </div>
      </div>
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
      {/* Score and timer */}
      {status === 'playing' && (
        <div className='flex flex-wrap items-center justify-center flex-grow order-3 gap-5 text-3xl font-bold text-white lg:order-2 sm:gap-20 sm:flex-row lg:flex-grow-0'>
          <Score />
          <Timer viewConfetti={viewConfetti} />
        </div>
      )}
      {/* Menu  */}
      <div className='z-20 block md:hidden'>
        <button
          id='boton'
          className='flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white'
          onClick={toggleMenu}
        >
          <svg
            className='w-3 h-3 fill-current'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      {/* Dificult and Colors */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } fixed top-0 right-0  flex-col order-2   h-screen gap-5 px-3 pt-20 w-44 md:px-0 md:w-auto md:static md:h-auto md:flex-row lg:order-2 md:flex md:pt-0 md:bg-inherit bg-slate-800`}
      >
        <DificultSelect />
        <Link
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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
