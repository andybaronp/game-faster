import { colorsDifult } from '@/utils/levelUtils'
import Link from 'next/link'

function Home() {
  return (
    <div className='flex items-center justify-center flex-grow'>
      <div className='flex flex-col items-center justify-center w-full gap-3 p-5 text-center border rounded cursor-pointer border-cyan-300 '>
        <Link href='/colors'>
          <p className='pb-2 text-5xl font-semibold text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text'>
            COLORES
          </p>
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
