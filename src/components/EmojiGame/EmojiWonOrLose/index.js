import './index.css'

const EmojiWonOrLose = props => {
  const {score, playGameAgain} = props
  const wonTheGame = score === 12
  const winOrLoseImage = wonTheGame
    ? 'https://res.cloudinary.com/dykjwqjqi/image/upload/v1725116743/egcyywxfdzmbej69z4m8.png'
    : 'https://res.cloudinary.com/dykjwqjqi/image/upload/v1725122612/p0tjxn2f15b08j0jdfjs.png'
  const winOrLosetext = wonTheGame ? 'You Won' : 'You Loss'
  const winOrLoseAltText = wonTheGame ? 'won' : 'lose'
  const onClickPlayAgain = () => {
    playGameAgain()
  }
  return (
    <div className="wonOrLose-won-main-container">
      <div className="wonOrLose-won-card-container">
        <img
          className="wonOrLose-won-image"
          src={winOrLoseImage}
          alt={winOrLoseAltText}
        />
        <div className="wonOrLose-won-description-container">
          <h1 className="wonOrLose-won-heading">{winOrLosetext}</h1>
          <p className="wonOrLose-won-score-text">Best Score</p>
          <p className="wonOrLose-won-score-num">{score}/12</p>

          <div className="wonOrLose-won-play-btn-container">
            <button
              onClick={onClickPlayAgain}
              className="wonOrLose-won-play-again-btn"
              type="button"
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmojiWonOrLose
