import {Component} from 'react'

import {BiArrowBack} from 'react-icons/bi'

import PlayRPSgame from '../PlayRPSgame'

import ExitPopup from '../../ExitPopup'

import './index.css'

class RPSrules extends Component {
  state = {startedPlaying: false}

  onClickStartPlay = () => {
    this.setState({startedPlaying: true})
  }

  render() {
    const {startedPlaying} = this.state
    return (
      <>
        {!startedPlaying && (
          <div className="rpsRules-main-container">
            <div className="rps-leftArrow-backPara-container">
              <ExitPopup>
                <button className="rps-back-button" type="button">
                  <BiArrowBack size={28} color="#FFFFFF" aria-label="back" />
                </button>
              </ExitPopup>
              <p className="rps-back-para">Back</p>
            </div>
            <div className="rps-card-container">
              <div className="rpsImage-rpsGameHeading-container">
                <h1 className="rps-game-heading">ROCK PAPER SCISSOR</h1>
                <img
                  className="rps-image"
                  src="https://res.cloudinary.com/dykjwqjqi/image/upload/v1725275534/vjvu0ssujuycgsafhtty.png"
                  alt="rock paper scissor"
                />
              </div>
              <div className="rps-rulesHeading-ul-container">
                <h1 className="rps-rules-heading">Rules</h1>
                <ul className="rps-rules-ul-container">
                  <li className="rps-rules-list-item">
                    User should be able to see the list of Emojis
                  </li>
                  <li className="rps-rules-list-item">
                    When the user clicks any one of the Emoji for the first
                    time, then the count of the score should be incremented by 1
                    and the List of emoji cards should be shuffled.
                  </li>
                  <li className="rps-rules-list-item">
                    This process should be repeated every time the user clicks
                    on an emoji card
                  </li>
                  <li className="rps-rules-list-item">
                    When the user clicks on all Emoji cards without clicking any
                    of it twice, then the user will win the game
                  </li>
                  <li className="rps-rules-list-item">
                    When the user clicks on the same Emoji for the second time,
                    then the user will lose the game.
                  </li>
                  <li className="rps-rules-list-item">
                    Once the game is over, the user will be redirected to the
                    results page.
                  </li>
                </ul>
                <div className="rps-start-play-btn-container">
                  <button
                    onClick={this.onClickStartPlay}
                    className="rps-start-playing-button"
                    type="button"
                  >
                    Start Playing
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {startedPlaying && <PlayRPSgame />}
      </>
    )
  }
}

export default RPSrules
