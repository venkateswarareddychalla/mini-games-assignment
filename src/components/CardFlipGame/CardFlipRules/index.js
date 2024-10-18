import {Component} from 'react'

import {BiArrowBack} from 'react-icons/bi'

import PlayCardFlipGame from '../PlayCardFlipGame'

import {withRouter} from 'react-router-dom'

// import ExitPopup from '../../ExitPopup'

import './index.css'

class CardFlipRules extends Component {
  state = {startedPlaying: false}

  onClickStartPlay = () => {
    this.setState({startedPlaying: true})
  }

  onClickExit = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {startedPlaying} = this.state
    return (
      <>
        {startedPlaying ? (
          <PlayCardFlipGame />
        ) : (
          <div className="cardFlipRules-main-container">
            <div className="cardFlip-leftArrow-backPara-container">
              <button
                onClick={this.onClickExit}
                className="cardFlip-back-button"
                type="button"
              >
                <BiArrowBack size={28} color="#FFFFFF" aria-label="back" />
              </button>

              <p className="cardFlip-back-para">Back</p>
            </div>
            <div className="cardFlip-card-container">
              <div className="cardFlipImage-cardFlipGameHeading-container">
                <h1 className="cardFlip-game-heading">Card-Flip Memory Game</h1>
                <img
                  className="cardFlip-image"
                  src="https://res.cloudinary.com/dykjwqjqi/image/upload/v1726565782/mfiibcioiorbtv0lmaah.png"
                  alt="rock paper scissor"
                />
              </div>
              <div className="cardFlip-rulesHeading-ul-container">
                <h1 className="cardFlip-rules-heading">Rules</h1>
                <ul className="cardFlip-rules-ul-container">
                  <li className="cardFlip-rules-list-item">
                    When the game is started, the users should be able to see
                    the list of Cards that are shuffled and turned face down.
                  </li>
                  <li className="cardFlip-rules-list-item">
                    When a user starts the game, the user should be able to see
                    the Timer running.
                  </li>
                  <li className="cardFlip-rules-list-item">
                    The Timer starts from 2 Minutes.
                  </li>
                  <li className="cardFlip-rules-list-item">
                    If the two cards have the same image, they remain face up.
                    If not, they should be flipped face down again after a short
                    2 seconds.
                  </li>
                  <li className="cardFlip-rules-list-item">
                    Users should be able to compare only two cards at a time.
                  </li>
                  <li className="cardFlip-rules-list-item">
                    When the user is not able to find all the cards before the
                    timer ends then the game should end and redirect to the Time
                    Up Page.
                  </li>
                  <li className="cardFlip-rules-list-item">
                    If the user finds all the matching cards before the timer
                    ends, then the user should be redirected to the results
                    page.
                  </li>
                </ul>
                <div className="cardFlip-start-play-btn-container">
                  <button
                    onClick={this.onClickStartPlay}
                    className="cardFlip-start-playing-button"
                    type="button"
                  >
                    Start Playing
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default withRouter(CardFlipRules)
