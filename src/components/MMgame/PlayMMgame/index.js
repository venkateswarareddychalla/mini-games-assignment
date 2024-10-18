import React, {Component} from 'react'

import {BiArrowBack} from 'react-icons/bi'

// import {v4 as uuidv4} from 'uuid'
import MMrulesPopup from '../MMrulesPopup'

import MMresult from '../MMresult'

import {withRouter} from 'react-router-dom'

// import ExitPopup from '../../ExitPopup'

import './index.css'

class PlayMMgame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameInProgress: true,
      gridSize: 3, // Initial grid size of 3x3
      highlightedBoxes: [],
      selectedBoxes: [],
      isClickable: false,
      level: 1, // Keep track of the current level
    }
  }

  componentDidMount() {
    this.startNewLevel()
  }

  // Method to generate random highlighted boxes
  getRandomHighlightedBoxes(gridSize) {
    const totalBoxes = gridSize * gridSize
    const highlightedBoxes = new Set()
    while (highlightedBoxes.size < gridSize) {
      const randomBox = Math.floor(Math.random() * totalBoxes)
      highlightedBoxes.add(randomBox)
    }
    return Array.from(highlightedBoxes)
  }

  playAgain = () => {
    this.setState(
      {
        gameInProgress: true,
        gridSize: 3,
        highlightedBoxes: [],
        selectedBoxes: [],
        isClickable: false,
        level: 1,
      },
      this.startNewLevel,
    )
  }

  // Method to start a new level
  startNewLevel = () => {
    const {gridSize} = this.state
    const highlightedBoxes = this.getRandomHighlightedBoxes(gridSize)
    this.setState({
      highlightedBoxes,
      selectedBoxes: [],
      isClickable: false,
    })

    // Highlight the boxes for N seconds
    setTimeout(() => {
      this.setState({isClickable: true})
    }, gridSize * 1000) // N seconds = gridSize seconds
  }

  // Method to handle box click
  handleBoxClick = boxId => {
    const {isClickable, highlightedBoxes, selectedBoxes} = this.state
    if (!isClickable) return // Don't allow clicks until clickable

    // Check if clicked box is a highlighted one
    if (highlightedBoxes.includes(boxId)) {
      if (!selectedBoxes.includes(boxId)) {
        this.setState(
          prevState => ({
            selectedBoxes: [...prevState.selectedBoxes, boxId],
          }),
          this.checkWinCondition,
        )
      }
    } else {
      // Wrong box clicked, restart the same level
      // alert('Wrong box! Try again.')
      this.setState({gameInProgress: false})
      // this.startNewLevel()
    }
  }

  // Method to check if user has selected all highlighted boxes
  checkWinCondition = () => {
    const {highlightedBoxes, selectedBoxes, gridSize, level} = this.state
    if (level > 15) {
      this.setState({gameInProgress: false})
    }
    if (highlightedBoxes.length === selectedBoxes.length) {
      // Move to next level
      this.setState(prevState => ({
        gridSize: prevState.gridSize + 1, // Increase grid size
        level: prevState.level + 1,
      }))
      alert(`Congrats! Moving to level ${this.state.level + 1}`)
      this.startNewLevel()
    }
  }

  // Render grid based on gridSize
  renderGrid = () => {
    const {gridSize, highlightedBoxes, selectedBoxes, isClickable} = this.state
    const totalBoxes = gridSize * gridSize
    const boxes = []

    for (let i = 0; i < totalBoxes; i++) {
      let boxClass = 'box' // Default class
      let dataTestId = 'notHighlighted'
      if (!isClickable && highlightedBoxes.includes(i)) {
        boxClass += ' highlighted' // Highlight boxes in the beginning
        dataTestId = 'highlighted'
      } else if (selectedBoxes.includes(i)) {
        boxClass += ' selected' // Highlight correct selections
      }
      boxes.push(
        <li className="box-list-item">
          <button
            data-testid={dataTestId}
            onClick={() => this.handleBoxClick(i)}
            className={boxClass}
          >
            <div />
          </button>
        </li>,
      )
    }

    return boxes
  }

  onClickExit = () => {
    const {history} = this.props
    history.replace('/')
  }

  renderplayMMgameDetails = () => {
    const {level, gridSize} = this.state
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
          <MMrulesPopup />
        </div>
        <h1 className="playMMgame-game-heading">Memory Matrix</h1>
        <div className="playMMgame-description-container">
          <p className="playMMgame-level-text">Level: {level}</p>
          <ul
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
              gridTemplateRows: `repeat(${gridSize}, 1fr)`,
            }}
          >
            {this.renderGrid()}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {gridSize, level, gameInProgress} = this.state
    return (
      <>
        {gameInProgress && this.renderplayMMgameDetails()}
        {!gameInProgress && (
          <MMresult level={level} playAgain={this.playAgain} />
        )}
      </>
    )
  }
}

export default withRouter(PlayMMgame)
