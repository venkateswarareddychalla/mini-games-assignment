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

const MMrulesPopup = () => {
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
        <div className="mmRulesPopup-popup-container">
          <div className="mmRulesPopup-popup-rules-close-main-container">
            <div className="mmRulesPopup-popup-rules-close-container">
              <h1 className="mmRulesPopup-popup-rules-heading">Rules</h1>
              <button
                data-testid="close"
                className="mmRulesPopup-popup-close-btn"
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
          <ul className="mmRulesPopup-popup-rules-ul-container">
            <li className="mmRulesPopup-popup-rules-list-item">
              In each level of the Game, Users should be able to see the Grid
              with (N X N) size starting from 3 and the grid will highlight N
              cells in Blue, the N highlighted cells will be picked randomly.
            </li>
            <li className="mmRulesPopup-popup-rules-list-item">
              The highlighted cells will remain N seconds for the user to
              memorize the cells. At this point, the user should not be able to
              perform any action.
            </li>
            <li className="mmRulesPopup-popup-rules-list-item">
              After N seconds, the grid will clear the N highlighted cells.
            </li>
            <li className="mmRulesPopup-popup-rules-list-item">
              At N seconds, the user can click on any cell. Clicking on a cell
              that was highlighted before it will turn blue. Clicking on the
              other cells that were not highlighted before then will turn to
              red.
            </li>
            <li className="mmRulesPopup-popup-rules-list-item">
              The user should be promoted to the next level if they guess all N
              cells correctly in one attempt.
            </li>
            <li className="mmRulesPopup-popup-rules-list-item">
              The user should be taken to the results page if the user clicks on
              the wrong cell.
            </li>
            <li className="mmRulesPopup-popup-rules-list-item">
              If the user completed all the levels, then the user should be
              taken to the results page.
            </li>
          </ul>
        </div>
      </Modal>
    </div>
  )
}

export default MMrulesPopup
