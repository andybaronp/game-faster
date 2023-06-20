const ranking = [
  {
    nombre: 'Juan',
    dificultad: 'Facil',
    puntaje: '100',
  },
  {
    nombre: 'María',
    dificultad: 'Difícil',
    puntaje: '250',
  },
  {
    nombre: 'Pedro',
    dificultad: 'Medio',
    puntaje: '180',
  },
  {
    nombre: 'Ana',
    dificultad: 'Medio',
    puntaje: '150',
  },
  {
    nombre: 'Luis',
    dificultad: 'Facil',
    puntaje: '80',
  },
]
const RankingView = () => {
  return (
    <div className='w-full h-auto p-4 rounded-lg shadow-md bg-slate-600'>
      <h2 className='mb-4 text-2xl font-bold'>Ranking</h2>
      <table className='min-w-full divide-y divide-gray-700'>
        <thead>
          <tr>
            <th className='px-4 py-2'>Nombre</th>
            <th className='px-4 py-2'>Dificultad</th>
            <th className='px-4 py-2'>Puntaje</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((player, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-gray-400' : 'bg-slate-500'}
            >
              <td className='px-4 py-2 text-center'>{player.nombre}</td>
              <td className='px-4 py-2 text-center'>{player.dificultad}</td>
              <td className='px-4 py-2 text-center'>{player.puntaje}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RankingView
