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

const RPSrulesPopup = () => {
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
        className="rpsRulesPopup-main-game-rules-btn"
        type="button"
      >
        Rules
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onClickCloseModal}
        style={customStyles}
      >
        <div className="rpsRulesPopup-popup-container">
          <div className="rpsRulesPopup-popup-rules-close-main-container">
            <div className="rpsRulesPopup-popup-rules-close-container">
              <h1 className="rpsRulesPopup-popup-rules-heading">Rules</h1>
              <button
                data-testid="close"
                className="rpsRulesPopup-popup-close-btn"
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
          <ul className="rpsRulesPopup-popup-rules-ul-container">
            <li className="rpsRulesPopup-popup-rules-list-item">
              The game result should be based on user and user opponent choices
            </li>
            <li className="rpsRulesPopup-popup-rules-list-item">
              When the user choice is rock and his opponent choice is rock then
              the result will be IT IS DRAW
            </li>
            <li className="rpsRulesPopup-popup-rules-list-item">
              When the user choice is paper and his opponent choice is rock then
              the result will be YOU WON
            </li>
            <li className="rpsRulesPopup-popup-rules-list-item">
              When the user choice is a scissor and his opponent choice is rock
              then the result will be YOU LOSE
            </li>
            <li className="rpsRulesPopup-popup-rules-list-item">
              When the user choice is paper and his opponent choice is paper
              then the result will be IT IS DRAW
            </li>
            <li className="rpsRulesPopup-popup-rules-list-item">
              When the user choice is scissors and his opponent choice is paper
              then the result will be YOU WON
            </li>
          </ul>
        </div>
      </Modal>
    </div>
  )
}

export default RPSrulesPopup
