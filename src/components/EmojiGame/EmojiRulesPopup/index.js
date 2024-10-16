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

const EmojiRulesPopup = () => {
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
        className="emojiRulesPopup-main-game-rules-btn"
        type="button"
      >
        Rules
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onClickCloseModal}
        style={customStyles}
      >
        <div className="emojiRulesPopup-popup-container">
          <div className="emojiRulesPopup-popup-rules-close-main-container">
            <div className="emojiRulesPopup-popup-rules-close-container">
              <h1 className="emojiRulesPopup-popup-rules-heading">Rules</h1>
              <button
                data-testid="close"
                className="emojiRulesPopup-popup-close-btn"
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
          <ul className="emojiRulesPopup-popup-rules-ul-container">
            <li className="emojiRulesPopup-popup-rules-list-item">
              User should be able to see the list of Emojis
            </li>
            <li className="emojiRulesPopup-popup-rules-list-item">
              When the user clicks any one of the Emoji for the first time, then
              the count of the score should be incremented by 1 and the List of
              emoji cards should be shuffled.
            </li>
            <li className="emojiRulesPopup-popup-rules-list-item">
              This process should be repeated every time the user clicks on an
              emoji card
            </li>
            <li className="emojiRulesPopup-popup-rules-list-item">
              When the user clicks on all Emoji cards without clicking any of it
              twice, then the user will win the game
            </li>
            <li className="emojiRulesPopup-popup-rules-list-item">
              When the user clicks on the same Emoji for the second time, then
              the user will lose the game.
            </li>
            <li className="emojiRulesPopup-popup-rules-list-item">
              Once the game is over, the user will be redirected to the results
              page.
            </li>
          </ul>
        </div>
      </Modal>
    </div>
  )
}

export default EmojiRulesPopup
