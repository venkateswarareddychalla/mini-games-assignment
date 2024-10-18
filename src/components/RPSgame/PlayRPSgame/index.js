import {Component} from 'react'

import {BiArrowBack} from 'react-icons/bi'

import RPSrulesPopup from '../RPSrulesPopup'

import RPSwinDrawLose from '../RPSwinDrawLose'

import {withRouter} from 'react-router-dom'

// import ExitPopup from '../../ExitPopup'

import './index.css'

const choicesList = [
  {
    id: 'rock',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'scissor',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'paper',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class PlayRPSgame extends Component {
  state = {
    gameInProgress: true,
    resultBigImage: '',
    resultSmallImageAltText: '',
    resultSmallImage: '',
    resultText: '',
    userImage: '',
    opponentImage: '',
    score: 0,
    userWon: false,
    opponentWon: false,
    userImageAltText: '',
    opponentImageAltText: '',
  }

  onCLickGameBtn = id => {
    const opponentObj =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    const userImage = choicesList.find(each => each.id === id).imageUrl
    const opponentImage = opponentObj.imageUrl

    this.setState({
      gameInProgress: false,
      userImage,
      opponentImage,
      userImageAltText: id,
      opponentImageAltText: opponentObj.id,
    })

    if (id === opponentObj.id) {
      this.setState({
        resultBigImage:
          'https://res.cloudinary.com/dykjwqjqi/image/upload/v1725457885/ecj3q2wx0q5n1il7h9m1.png',
        resultSmallImage:
          'https://res.cloudinary.com/dykjwqjqi/image/upload/v1725460244/oa8mnfpyflkvr6oaxkoh.png',
        resultText: 'IT IS DRAW',
        resultSmallImageAltText: 'draw emoji',
        userWon: false,
        opponentWon: false,
      })
    } else if (
      (id === 'rock' && opponentObj.id === 'scissor') ||
      (id === 'paper' && opponentObj.id === 'rock') ||
      (id === 'scissor' && opponentObj.id === 'paper')
    ) {
      const {score} = this.state
      this.setState({
        resultBigImage:
          'https://res.cloudinary.com/dykjwqjqi/image/upload/v1725457826/r12qhqlggcgetbww9ibm.png',
        resultSmallImage:
          'https://res.cloudinary.com/dykjwqjqi/image/upload/v1725460234/gcdw7elancrmrwrdd8v5.png',
        resultText: 'YOU WON',
        score: score + 1,
        userWon: true,
        opponentWon: false,
        resultSmallImageAltText: 'won emoji',
      })
    } else {
      const {score} = this.state
      this.setState({
        resultBigImage:
          'https://res.cloudinary.com/dykjwqjqi/image/upload/v1725457905/xpapb7gs2b9agqmznyer.png',
        resultSmallImage:
          'https://res.cloudinary.com/dykjwqjqi/image/upload/v1725460253/hmgcysxr9slo4clrv8pi.png',
        resultText: 'YOU LOSE',
        score: score - 1,
        userWon: false,
        opponentWon: true,
        resultSmallImageAltText: 'lose emoji',
      })
    }
  }

  playAgain = () => {
    this.setState({gameInProgress: true})
  }

  onClickExit = () => {
    const {history} = this.props
    history.replace('/')
  }

  renderPlayRPSgameDetails = () => {
    const {gameInProgress} = this.state
    return (
      <div className="playRPSgame-main-game-container">
        <div className="playRPSgame-rules-back-container">
          <div className="playRPSgame-leftArrow-backPara-container">
            <button
              onClick={this.onClickExit}
              className="playRPSgame-back-button"
              type="button"
            >
              <BiArrowBack size={28} color="#FFFFFF" aria-label="back" />
            </button>

            <p className="playRPSgame-back-para">Back</p>
          </div>
          <RPSrulesPopup />
        </div>
        <h1 className="playRPSgame-game-heading">ROCK PAPER SCISSOR</h1>
        <div className="playRPSgame-description-container">
          <h1 className="playRPSgame-heading">Let’s pick</h1>
          <ul className="playRPSgame-ul-container">
            {choicesList.map(each => {
              const {id, imageUrl} = each
              return (
                <li className="playRPSgame-list-item" key={id}>
                  <button
                    onClick={() => this.onCLickGameBtn(id)}
                    className="playRPSgame-list-btn"
                    data-testid={`${id}Button`}
                    type="button"
                  >
                    <img
                      className="playRPSgame-list-image"
                      src={imageUrl}
                      alt={id}
                    />
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }

  renderWinOrDrawOrLoseGameDetails = () => {
    const {
      resultBigImage,
      resultSmallImage,
      resultText,
      score,
      userImage,
      opponentImage,
      userWon,
      opponentWon,
      resultSmallImageAltText,
      opponentImageAltText,
      userImageAltText,
    } = this.state
    return (
      <RPSwinDrawLose
        resultBigImage={resultBigImage}
        resultSmallImage={resultSmallImage}
        resultText={resultText}
        score={score}
        playAgain={this.playAgain}
        userImage={userImage}
        opponentImage={opponentImage}
        userWon={userWon}
        opponentWon={opponentWon}
        resultSmallImageAltText={resultSmallImageAltText}
        userImageAltText={userImageAltText}
        opponentImageAltText={opponentImageAltText}
      />
    )
  }

  render() {
    const {gameInProgress} = this.state
    return (
      <>
        {' '}
        {gameInProgress && this.renderPlayRPSgameDetails()}
        {!gameInProgress && this.renderWinOrDrawOrLoseGameDetails()}
      </>
    )
  }
}

export default withRouter(PlayRPSgame)
