import { colorsDifult } from '@/utils/levelUtils'
import Link from 'next/link'

function Home() {
  // crea un div con un h1 y centra el div
  return (
    <div className='flex items-center justify-center flex-grow'>
      <div className='flex flex-col items-center justify-center w-full gap-3 p-5 text-center border border-yellow-300 rounded cursor-pointer '>
        <Link href='/colors'>
          <p className='pb-2 text-5xl font-semibold text-slate-300'>COLORES</p>
          <div className='flex flex-wrap items-center justify-center w-full gap-2'>
            {colorsDifult['normal'].map((color, index) => {
              return (
                <div
                  key={index}
                  className={`${color.bgcolor} w-10 h-10 border border-gray-500 rounded`}
                ></div>
              )
            })}
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home
