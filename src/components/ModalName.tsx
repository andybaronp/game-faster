import { useState } from 'react'

const ModalName = ({
  hidden,
  setHidden,
}: {
  hidden: string
  setHidden: (state: string) => void
}) => {
  const [name, setName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
    setErrorMessage('')
  }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.length < 3) {
      setErrorMessage('El nombre ser mayor a 3 letras.')
      return
    }
    if (name.length > 10) {
      setErrorMessage('El nombre ser menor a 10 letras.')
      return
    }
    localStorage.setItem('name', name)
    setHidden('hidden')
  }

  return (
    <div
      id='modalContainer'
      className={`fixed inset-0 z-10 overflow-y-auto ${hidden} `}
    >
      <div className='flex items-center justify-center min-h-screen px-4 '>
        <div className='fixed inset-0 transition-opacity'>
          <div className='absolute inset-0 opacity-75 bg-slate-800'></div>
        </div>
        <div className='relative max-w-sm p-4 mx-auto rounded bg-slate-400 w-72'>
          <h2 className='mb-4 text-xl font-bold text-center'>Jugador 🎮</h2>
          <form onSubmit={handleSave}>
            <input
              id='nameInput'
              type='text'
              placeholder='Ingresa tu nombre'
              value={name}
              onChange={handleInputChange}
              className='w-full px-4 py-2 mb-4 border rounded border-slate-300 outline outline-1'
              autoFocus
            />

            <p className='my-2 text-xs text-red-500 h-7 sm:text-base'>
              {errorMessage}
            </p>

            <div className='flex justify-end'>
              <button
                id='closeModal'
                className='px-6 py-2 text-sm font-medium delay-150 bg-yellow-300 rounded-md hover:bg-yellow-400'
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalName
