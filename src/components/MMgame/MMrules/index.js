import {Component} from 'react'

import {BiArrowBack} from 'react-icons/bi'

import PlayMMgame from '../PlayMMgame'

import ExitPopup from '../../ExitPopup'

import './index.css'

class MMrules extends Component {
  state = {startedPlaying: false}

  onClickStartPlay = () => {
    this.setState({startedPlaying: true})
  }

  render() {
    const {startedPlaying} = this.state
    return (
      <>
        {!startedPlaying && (
          <div className="mmRules-main-container">
            <div className="mm-leftArrow-backPara-container">
              <ExitPopup>
                <button className="mm-back-button" type="button">
                  <BiArrowBack size={28} color="#FFFFFF" aria-label="back" />
                </button>
              </ExitPopup>
              <p className="mm-back-para">Back</p>
            </div>
            <div className="mm-card-container">
              <div className="mmImage-mmGameHeading-container">
                <h1 className="mm-game-heading">Memory Matrix</h1>
                <img
                  className="mm-image"
                  src="https://res.cloudinary.com/dykjwqjqi/image/upload/v1726324812/lbowlyp2837cv40ql81y.png"
                  alt="rock paper scissor"
                />
              </div>
              <div className="mm-rulesHeading-ul-container">
                <h1 className="mm-rules-heading">Rules</h1>
                <ul className="mm-rules-ul-container">
                  <li className="mm-rules-list-item">
                    In each level of the Game, Users should be able to see the
                    Grid with (N X N) size starting from 3 and the grid will
                    highlight N cells in Blue, the N highlighted cells will be
                    picked randomly.
                  </li>
                  <li className="mm-rules-list-item">
                    The highlighted cells will remain N seconds for the user to
                    memorize the cells. At this point, the user should not be
                    able to perform any action.
                  </li>
                  <li className="mm-rules-list-item">
                    After N seconds, the grid will clear the N highlighted
                    cells.
                  </li>
                  <li className="mm-rules-list-item">
                    At N seconds, the user can click on any cell. Clicking on a
                    cell that was highlighted before it will turn blue. Clicking
                    on the other cells that were not highlighted before then
                    will turn to red.
                  </li>
                  <li className="mm-rules-list-item">
                    The user should be promoted to the next level if they guess
                    all N cells correctly in one attempt.
                  </li>
                  <li className="mm-rules-list-item">
                    The user should be taken to the results page if the user
                    clicks on the wrong cell.
                  </li>
                  <li className="mm-rules-list-item">
                    If the user completed all the levels, then the user should
                    be taken to the results page.
                  </li>
                </ul>
                <div className="mm-start-play-btn-container">
                  <button
                    onClick={this.onClickStartPlay}
                    className="mm-start-playing-button"
                    type="button"
                  >
                    Start Playing
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {startedPlaying && <PlayMMgame />}
      </>
    )
  }
}

export default MMrules
