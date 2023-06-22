interface Player {
  name: string
  dificult: string
  score: number
}
const RankingView = async () => {
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
          {[
            {
              'id': 9,
              'created_at': '2023-06-21T18:37:33.871666+00:00',
              'name': 'Joe ',
              'score': 12,
              'dificult': 'normal',
              'email': 'Joe@gmail.com',
            },
            {
              'id': 1,
              'created_at': '2023-06-21T13:49:27.928013+00:00',
              'name': 'Jym Rolf',
              'score': 8,
              'dificult': 'hard',
              'email': 'Jym@gmail.com',
            },
          ].map((player: Player, index: number) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-gray-400' : 'bg-slate-500'}
            >
              <td className='px-4 py-2 text-center'>{player.name}</td>
              <td className='px-4 py-2 text-center'>{player.dificult}</td>
              <td className='px-4 py-2 text-center'>
                {index === 0
                  ? `${player.score} 👽`
                  : index === 1
                  ? `${player.score} 👾`
                  : index === 1
                  ? `${player.score} 🤖`
                  : player.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RankingView
