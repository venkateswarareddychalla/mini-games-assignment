import React, {Component} from 'react'

import {BiArrowBack} from 'react-icons/bi'

// import {v4 as uuidv4} from 'uuid'
import ResultCardFlipGame from '../ResultCardFlipGame'

import CardFlipRulesPopup from '../CardFlipRulesPopup'

import {withRouter} from 'react-router-dom'

// import ExitPopup from '../../ExitPopup'

import './index.css'

const cardsData = [
  {
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
  },
  {
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
  },
  {
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
  },
  {
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
  },
  {
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
  },
  {
    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
  },
  {
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
  },
  {
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
  },
  {
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
  },
  {
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
  },
]

class PlayCardFlipGame extends Component {
  state = {
    shuffledCards: [],
    flippedCards: [],
    matchedCards: [],
    timer: 120, // 2 minutes
    gamePlaying: true,
    cardFlipCount: 0,
    score: 0,
  }

  componentDidMount() {
    this.startGame()
    this.startTimer()
  }

  playAgain = () => {
    clearInterval(this.timerInterval)
    this.setState(
      {
        shuffleCards: [],
        flippedCards: [],
        matchedCards: [],
        timer: 120,
        gamePlaying: true,
        cardFlipCount: 0,
        score: 0,
      },
      () => {
        this.startGame(), this.startTimer()
      },
    )
  }

  startGame = () => {
    const shuffledCards = this.shuffleCards([...cardsData, ...cardsData])
    this.setState({shuffledCards})
  }

  startTimer = () => {
    this.timerInterval = setInterval(() => {
      const {timer} = this.state
      if (timer > 0) {
        this.setState({timer: timer - 1})
      } else {
        clearInterval(this.timerInterval)
        this.setState({gamePlaying: false})
      }
    }, 1000)
  }

  shuffleCards = cards => cards.sort(() => Math.random() - 0.5)

  handleCardClick = index => {
    const {
      flippedCards,
      matchedCards,
      shuffledCards,
      gamePlaying,
      cardFlipCount,
    } = this.state
    if (
      gamePlaying !== true ||
      flippedCards.length === 2 ||
      matchedCards.includes(index)
    )
      return

    const newFlippedCards = [...flippedCards, index]
    this.setState({
      flippedCards: newFlippedCards,
      cardFlipCount: cardFlipCount + 1,
    })

    if (newFlippedCards.length === 2) {
      setTimeout(() => this.checkMatch(newFlippedCards), 2000)
    }
  }

  checkMatch = flippedCards => {
    const {shuffledCards, matchedCards, score} = this.state
    const [first, second] = flippedCards

    if (matchedCards.length === cardsData.length * 2) {
      this.setState({gamePlaying: false})
    }

    if (shuffledCards[first].name === shuffledCards[second].name) {
      this.setState({
        matchedCards: [...matchedCards, first, second],
        flippedCards: [],
        score: score + 1,
      })
    } else {
      this.setState({flippedCards: []})
    }

    if (matchedCards.length + 2 === shuffledCards.length) {
      this.setState({gamePlaying: true})
    }
  }

  onClickExit = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {
      shuffledCards,
      flippedCards,
      matchedCards,
      timer,
      gamePlaying,
      cardFlipCount,
      score,
    } = this.state

    const flipCount = parseInt(cardFlipCount / 2)
    // const flippedScore = parseInt(score / 2)

    return (
      <div className="playMMgame-main-game-container">
        <div className="playMMgame-rules-back-container">
          <div className="playMMgame-leftArrow-backPara-container">
            <button
              onClick={this.onClickExit}
              className="playMMgame-back-button"
              type="button"
            >
              <BiArrowBack size={28} color="#FFFFFF" aria-label="back" />
            </button>

            <p className="playMMgame-back-para">Back</p>
          </div>
          <CardFlipRulesPopup />
        </div>
        <div className="memory-game">
          {gamePlaying && (
            <>
              <h1 className="playCardFlipGame-heading">
                Card-Flip Memory Game
              </h1>
              <p className="playCardFlipGame-timer">{`Time: ${Math.floor(
                timer / 60,
              )}:${timer % 60}`}</p>
              <div className="playCardFlipGame-flipCount-score-container">
                <p className="playCardFlipGame-cardFlipCount">
                  Card flip count - {flipCount}
                </p>
                <p className="playCardFlipGame-score">Score - {score}</p>
              </div>
              <ul className="cards-grid">
                {shuffledCards.map((card, index) => (
                  <li
                    className={`card ${
                      flippedCards.includes(index) ||
                      matchedCards.includes(index)
                        ? 'flipped'
                        : ''
                    }`}
                  >
                    <div className="card-front">
                      <img
                        className="card-image"
                        src={card.image}
                        alt={card.name}
                      />
                    </div>
                    <div className="card-back">
                      <button
                        onClick={() => this.handleCardClick(index)}
                        data-testid={card.name}
                      >
                        <img
                          src="https://res.cloudinary.com/dykjwqjqi/image/upload/v1726385281/dytbqtcdds2e88jpnmhv.png"
                          alt="foot print"
                          className="card-image"
                        />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
          {!gamePlaying && (
            <ResultCardFlipGame
              result={matchedCards.length === cardsData.length * 2}
              flipCount={flipCount}
              playAgain={this.playAgain}
            />
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(PlayCardFlipGame)
