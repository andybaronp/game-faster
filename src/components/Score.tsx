import { useScoreStore } from '@/app/store/colorsStore'

const Score = () => {
  const { score } = useScoreStore()

  return <div>Puntos: {score}</div>
}

export default Score
