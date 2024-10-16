import './index.css'

const ResultCardFlipGame = props => {
  const {result, flipCount, playAgain} = props
  const resultImage = result
    ? 'https://res.cloudinary.com/dykjwqjqi/image/upload/v1726296410/wxmytykmbnhjayp1z1ca.png'
    : 'https://res.cloudinary.com/dykjwqjqi/image/upload/v1726296489/jx4leteu0lfksnnk49pw.png'
  const resultText = result ? 'Congratulations!' : 'Better luck next time!'
  const resultDescription = result
    ? 'You matched all of the cards in record time'
    : 'You did not match all of the cards in record time'
  const resultImageAltText = result
    ? 'grinning face with big eyes'
    : 'neutral face'
  const onClickPlayAgain = () => {
    playAgain()
  }
  return (
    <div className="resultCardFlipGame-main-container">
      <img
        className="resultCardFlipGame-image"
        src={resultImage}
        alt={resultImageAltText}
      />
      <h1 className="resultCardFlipGame-heading">{resultText}</h1>
      <p className="resultCardFlipGame-flip-count">No.of Flips - {flipCount}</p>
      <p className="resultCardFlipGame-description">{resultDescription}</p>
      <button onClick={onClickPlayAgain} className="resultCardFlipGame-button">
        Play Again
      </button>
    </div>
  )
}

export default ResultCardFlipGame
