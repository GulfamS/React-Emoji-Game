import './index.css'

const loseGameImg = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const wonGameImg = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imgUrl = isWon ? wonGameImg : loseGameImg
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLable = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-lose-card">
      <div className="details-section">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="score-label">{scoreLable}</p>
        <p className="score">{score / 12}</p>
        <button type="button" className="play-btn" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <div className="img-section">
        <img src={imgUrl} className="win-lose-img" alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
