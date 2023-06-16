interface Props {
  score: number
}
const Score = ({ score }: Props) => {
  return <div>Puntos: {score}</div>
}

export default Score
