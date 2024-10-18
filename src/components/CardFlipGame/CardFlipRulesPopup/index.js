import Modal from 'react-modal'

import {CgClose} from 'react-icons/cg'

import {useState} from 'react'

// import 'reactjs-popup/dist/index.css'

import './index.css'

Modal.setAppElement('#root')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const CardFlipRulesPopup = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const onClickOpenModal = () => {
    setIsOpen(true)
  }

  const onClickCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <button
        onClick={onClickOpenModal}
        className="cardFlipRulesPopup-main-game-rules-btn"
        type="button"
      >
        Rules
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onClickCloseModal}
        style={customStyles}
      >
        <div className="cardFlipRulesPopup-popup-container">
          <div className="cardFlipRulesPopup-popup-rules-close-main-container">
            <div className="cardFlipRulesPopup-popup-rules-close-container">
              <h1 className="cardFlipRulesPopup-popup-rules-heading">Rules</h1>
              <button
                data-testid="close"
                className="cardFlipRulesPopup-popup-close-btn"
                onClick={onClickCloseModal}
                type="button"
              >
                <CgClose
                  size={25}
                  color="#475569"
                  height={24}
                  width={24}
                  aria-label="close"
                />
              </button>
            </div>
          </div>
          <ul className="cardFlipRulesPopup-popup-rules-ul-container">
            <li className="cardFlipRulesPopup-popup-rules-list-item">
              When the game is started, the users should be able to see the list
              of Cards that are shuffled and turned face down.
            </li>
            <li className="cardFlipRulesPopup-popup-rules-list-item">
              When a user starts the game, the user should be able to see the
              Timer running.
            </li>
            <li className="cardFlipRulesPopup-popup-rules-list-item">
              The Timer starts from 2 Minutes.
            </li>
            <li className="cardFlipRulesPopup-popup-rules-list-item">
              If the two cards have the same image, they remain face up. If not,
              they should be flipped face down again after a short 2 seconds.
            </li>
            <li className="cardFlipRulesPopup-popup-rules-list-item">
              Users should be able to compare only two cards at a time.
            </li>
            <li className="cardFlipRulesPopup-popup-rules-list-item">
              When the user is not able to find all the cards before the timer
              ends then the game should end and redirect to the Time Up Page.
            </li>
            <li className="cardFlipRulesPopup-popup-rules-list-item">
              If the user finds all the matching cards before the timer ends,
              then the user should be redirected to the results page.
            </li>
          </ul>
        </div>
      </Modal>
    </div>
  )
}

export default CardFlipRulesPopup
