import {Component} from 'react'

import {BiArrowBack} from 'react-icons/bi'

import EmojiRulesPopup from '../EmojiRulesPopup'

import EmojiWonOrLose from '../EmojiWonOrLose'

import ExitPopup from '../../ExitPopup'

import './index.css'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class PlayEmojiGame extends Component {
  state = {clickedEmojiIdsList: [], gameIsGoing: true}

  onClickEmoji = id => {
    const {clickedEmojiIdsList, score, gameIsGoing} = this.state
    if (clickedEmojiIdsList.length === 12) {
      this.setState({gameIsGoing: false})
    } else if (!clickedEmojiIdsList.includes(id)) {
      this.setState(prevState => ({
        clickedEmojiIdsList: [...prevState.clickedEmojiIdsList, id],
      }))
    } else {
      this.setState({gameIsGoing: false})
    }
  }

  playGameAgain = () => {
    this.setState({gameIsGoing: true, clickedEmojiIdsList: []})
  }

  renderHeaderDetails = () => {
    const {clickedEmojiIdsList, gameIsGoing} = this.state
    const score = clickedEmojiIdsList.length
    const gettingScoreFromLocalStorage = JSON.parse(
      localStorage.getItem('score'),
    )
    if (gettingScoreFromLocalStorage === null) {
      localStorage.setItem('score', JSON.stringify(score))
    } else {
      if (score > gettingScoreFromLocalStorage) {
        localStorage.setItem('score', JSON.stringify(score))
      }
    }

    return (
      <nav className="playEmojiGame-header-container">
        <div className="playEmojiGame-headerImage-heading-container">
          <img
            className="playEmojiGame-header-image"
            src="https://res.cloudinary.com/dykjwqjqi/image/upload/v1725110297/ntewyq7ijt5y7j02nn2c.png"
            alt="emoji logo"
          />
          <h1 className="playEmojiGame-header-heading">Emoji Game</h1>
        </div>
        <p className="playEmojiGame-header-top-score">
          Top Score: {JSON.parse(localStorage.getItem('score'))}
        </p>
        {gameIsGoing && (
          <div className="playEmojiGame-scores-container">
            <p className="playEmojiGame-header-score">
              Score: {clickedEmojiIdsList.length}
            </p>
          </div>
        )}
      </nav>
    )
  }

  renderMainGameDetails = () => {
    const updatedEmojisList = emojisList.sort(() => Math.random() - 0.5)
    return (
      <div className="playEmojiGame-main-game-container">
        <div className="playEmojiGame-rules-back-container">
          <div className="playEmojiGame-leftArrow-backPara-container">
            <ExitPopup>
              <button className="playEmojiGame-back-button" type="button">
                <BiArrowBack size={28} color="#334155" aria-label="back" />
              </button>
            </ExitPopup>
            <p className="playEmojiGame-back-para">Back</p>
          </div>
          <EmojiRulesPopup />
        </div>
        <ul className="playEmojiGame-emoji-items-ul-container">
          {updatedEmojisList.map(eachEmojiItem => {
            const {id, emojiName, emojiUrl} = eachEmojiItem
            return (
              <li className="playEmojiGame-emoji-list-item" key={id}>
                <button
                  onClick={() => this.onClickEmoji(id)}
                  className="playEmojiGame-emoji-list-btn"
                  type="button"
                >
                  <img
                    className="playEmojiGame-emoji-list-item-image"
                    src={emojiUrl}
                    alt={emojiName}
                    aria-label="emoji-image"
                  />
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  render() {
    const {gameIsGoing, clickedEmojiIdsList} = this.state

    return (
      <div className="container">
        {this.renderHeaderDetails()}
        {gameIsGoing && this.renderMainGameDetails()}
        {!gameIsGoing && (
          <EmojiWonOrLose
            score={clickedEmojiIdsList.length}
            playGameAgain={this.playGameAgain}
          />
        )}
      </div>
    )
  }
}

export default PlayEmojiGame
