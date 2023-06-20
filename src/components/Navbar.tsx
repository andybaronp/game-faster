'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Score from './Score'
import Timer from './Timer'
import { useScoreStore, useStatusStore } from '@/app/store/colorsStore'
import DificultSelect from './DificultSelect'
import confetti from 'canvas-confetti'
import Image from 'next/image'
import { User } from '@supabase/supabase-js'
import { getSessionSb, singIn, singOut } from '@/app/auth'
import { usePathname, useRouter } from 'next/navigation'

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
  const router = useRouter()
  const pathname = usePathname()
  const { status, upDateGameStatus } = useStatusStore()
  const { upDateScore } = useScoreStore()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSession, setIsession] = useState(false)
  const [name, setName] = useState<User | null>()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  useEffect(() => {
    const getSession = async () => {
      const { data } = await getSessionSb()
      if (data.session) {
        setName(data?.session?.user)
        setIsession(true)
      } else {
        setIsession(false)
      }
    }
    getSession()
  }, [])
  const handleSingIn = async () => {
    await singIn()
    router.push(pathname)
  }
  const handleOut = async () => {
    await singOut()
    router.push(pathname)
  }
  const handleScore = async () => {
    const a = await fetch('/api/colors', {
      method: 'POST',
    })
    const b = await a.json()
    console.log(b)
  }
  return (
    <nav className='flex flex-wrap items-center justify-between w-full gap-5 '>
      {/* Logo and name */}
      <div className='flex items-center flex-shrink-0 gap-5 text-white'>
        <button
          onClick={() => {
            // upDateScore('reset')
            // upDateGameStatus('initial')
            handleScore()
          }}
          className='cursor-pointer'
        >
          <Link href='/'>
            <Image src='/logo.svg' alt='logo' width={45} height={40} />
          </Link>
        </button>
        {isSession && (
          <div className='relative'>
            <span className='absolute -right-2 -top-4 rotate-12'>🎮</span>
            <div className='px-2 py-1 text-sm font-bold text-white border rounded-md border-cyan-300'>
              {name?.user_metadata.name}
            </div>
          </div>
        )}
      </div>

      <div className='flex gap-5'>
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

        {/* Menu  */}
        <div className='z-20 block lg:hidden'>
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
          } fixed top-0 right-0  flex-col order-2   h-screen gap-5 px-3 pt-20 w-full lg:px-0 lg:w-auto lg:static lg:h-auto lg:flex-row lg:order-2 lg:flex lg:pt-0 lg:bg-inherit bg-slate-800  items-center `}
        >
          <DificultSelect />
          <Link
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            href='/colors'
            passHref
            className='px-2 py-1 text-sm font-medium bg-yellow-300 rounded-md w-44 sm:px-6 hover:scale-105 sm:w-auto hover:bg-yellow-400'
          >
            Colores
          </Link>
          <div className='flex items-center gap-5 text-white'>
            <button>RANKIN</button>
          </div>
          {isSession ? (
            <button
              onClick={handleOut}
              className='px-2 py-1 text-sm font-medium text-yellow-500 rounded-md bg-slate-900 w-44 sm:px-4 hover:scale-105 hover:bg-yellow-400 hover:text-black sm:w-auto'
            >
              Cerrar sessión
            </button>
          ) : (
            <button
              onClick={handleSingIn}
              className='px-2 py-1 text-sm font-medium rounded-md w-44 bg-cyan-300 sm:px-6 hover:scale-105 hover:bg-cyan-400 text-slate-800 sm:w-auto'
            >
              Iniciar sessión
            </button>
          )}
        </div>
      </div>

      {status === 'playing' && (
        <div className='flex flex-wrap items-center justify-center flex-grow order-3 gap-5 text-3xl font-bold text-white sm:gap-20 sm:flex-row basis-full'>
          <Score />
          <Timer viewConfetti={viewConfetti} />
        </div>
      )}
    </nav>
  )
}

export default Navbar
