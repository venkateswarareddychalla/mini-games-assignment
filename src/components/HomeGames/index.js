import './index.css'

import {Link, withRouter} from 'react-router-dom'

// import {v4 as uuidv4} from 'uuid'

const HomeGames = props => {
  const {history} = props

  const onClickEmojiGame = () => {
    history.replace('/emoji-game')
  }
  const onClickMemoryMatrix = () => {
    history.replace('/memory-matrix')
  }
  const onClickRPS = () => {
    history.replace('/rock-paper-scissor')
  }
  const onClickCardFlipMemory = () => {
    history.replace('/card-flip-memory-game')
  }

  return (
    <div className="main-container">
      <h1 className="games-heading">Games</h1>
      <ul className="games-ul-container">
        <li className="list-item" onClick={onClickEmojiGame}>
          <img
            className="image"
            src="https://res.cloudinary.com/dykjwqjqi/image/upload/v1724940341/xa1gzddfj7lcybzecas3.png"
            alt="emoji game"
          />
          <p className="paragraph">Emoji Game</p>
        </li>
        <li className="list-item" onClick={onClickMemoryMatrix}>
          <p className="paragraph">Memory Matrix</p>
          <img
            className="image"
            src="https://res.cloudinary.com/dykjwqjqi/image/upload/v1724941161/hphggvqti4uxtbtmsyfm.png"
          />
        </li>
        <li className="list-item" onClick={onClickRPS}>
          <p className="paragraph">ROCK PAPER SCISSOR</p>
          <img
            className="image"
            src="https://res.cloudinary.com/dykjwqjqi/image/upload/v1724941583/osgbqu7ie57rafyzkklf.png"
          />
        </li>
        <li className="list-item" onClick={onClickCardFlipMemory}>
          <p className="paragraph">Card-Flip Memory Game</p>
          <img
            className="image"
            src="https://res.cloudinary.com/dykjwqjqi/image/upload/v1724941718/sg8jwumhafbwodm0oson.png"
          />
        </li>
      </ul>
    </div>
  )
}

export default withRouter(HomeGames)
