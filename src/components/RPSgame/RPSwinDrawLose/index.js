import './index.css'

const RPSwinDrawLose = props => {
  const {
    resultBigImage,
    resultSmallImage,
    resultText,
    score,
    playAgain,
    userImage,
    opponentImage,
    userWon,
    opponentWon,
    resultSmallImageAltText,
    opponentImageAltText,
    userImageAltText,
  } = props

  const userWOnClassName = userWon ? 'user-won' : ''
  const opponentWonClassName = opponentWon ? 'opponent-won' : ''
  const onCLickPlayAgain = () => {
    playAgain()
  }

  return (
    <div className="rpsWinDrawLose-main-container">
      <h1 className="rpsWinDrawLose-game-heading">ROCK PAPER SCISSOR</h1>
      <div className="rpsWinDrawLose-rps-img-score-container">
        <ul className="rpsWinDrawLose-rps-ul-container">
          <li className="rpsWinDrawLose-list-item">Rock</li>
          <li className="rpsWinDrawLose-list-item">Paper</li>
          <li className="rpsWinDrawLose-list-item">Scissor</li>
        </ul>
        <div className="rpsWinDrawLose-img-score-container">
          <img
            className="rpsWinDrawLose-image"
            src={resultBigImage}
            alt={resultSmallImageAltText}
          />
          <div className="rpsWinDrawLose-score-container">
            <p className="rpsWinDrawLose-score-text">Score</p>
            <span className="rpsWinDrawLose-score-num">{score}</span>
          </div>
        </div>
      </div>
      <div className="rpsWinDrawLose-you-result-opponent-container">
        <div className="rpsWinDrawLose-youText-img-container">
          <h1 className="rpsWinDrawLose-you-text">You</h1>
          <img
            className={`rpsWinDrawLose-you-image ${userWOnClassName}`}
            src={userImage}
            alt={userImageAltText}
          />
        </div>
        <div className="rpsWinDrawLose-img-youWon-btn-container">
          <img
            className="rpsWinDrawLose-result-image"
            src={resultSmallImage}
            alt={resultSmallImageAltText}
          />
          <h1 className="rpsWinDrawLose-you-won-heading">{resultText}</h1>
          <button
            className="rpsWinDrawLose-playAgain-btn"
            onClick={onCLickPlayAgain}
          >
            Play Again
          </button>
        </div>
        <div className="rpsWinDrawLose-opponentText-img-container">
          <h1 className="rpsWinDrawLose-opponent-text">Opponent</h1>
          <img
            className={`rpsWinDrawLose-opponent-image ${opponentWonClassName}`}
            src={opponentImage}
            alt={opponentImageAltText}
          />
        </div>
      </div>
    </div>
  )
}

export default RPSwinDrawLose
