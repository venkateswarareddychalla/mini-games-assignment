import {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'

import {BiArrowBack} from 'react-icons/bi'

import PlayEmojiGame from '../PlayEmojiGame'

// import ExitPopup from '../../ExitPopup'

import './index.css'

class EmojiRules extends Component {
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
          <PlayEmojiGame para={<p>hello</p>} />
        ) : (
          <div className="emojiRules-main-container">
            <div className="emoji-leftArrow-backPara-container">
              <button
                onClick={this.onClickExit}
                className="emoji-back-button"
                type="button"
              >
                <BiArrowBack size={28} color="#334155" aria-label="back" />
              </button>

              <p className="emoji-back-para">Back</p>
            </div>
            <div className="emoji-card-container">
              <div className="emojiImage-emojiGameHeading-container">
                <img
                  className="emoji-image"
                  src="https://res.cloudinary.com/dykjwqjqi/image/upload/v1724940341/xa1gzddfj7lcybzecas3.png"
                  alt="emoji game"
                />
                <h1 className="emoji-game-heading">Emoji Game</h1>
              </div>
              <div className="emoji-rulesHeading-ul-container">
                <h1 className="emoji-rules-heading">Rules</h1>
                <ul className="emoji-rules-ul-container">
                  <li className="emoji-rules-list-item">
                    User should be able to see the list of Emojis
                  </li>
                  <li className="emoji-rules-list-item">
                    When the user clicks any one of the Emoji for the first
                    time, then the count of the score should be incremented by 1
                    and the List of emoji cards should be shuffled.
                  </li>
                  <li className="emoji-rules-list-item">
                    This process should be repeated every time the user clicks
                    on an emoji card
                  </li>
                  <li className="emoji-rules-list-item">
                    When the user clicks on all Emoji cards without clicking any
                    of it twice, then the user will win the game
                  </li>
                  <li className="emoji-rules-list-item">
                    When the user clicks on the same Emoji for the second time,
                    then the user will lose the game.
                  </li>
                  <li className="emoji-rules-list-item">
                    Once the game is over, the user will be redirected to the
                    results page.
                  </li>
                </ul>
                <div className="emoji-start-play-btn-container">
                  <button
                    onClick={this.onClickStartPlay}
                    className="emoji-start-playing-button"
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

export default withRouter(EmojiRules)
