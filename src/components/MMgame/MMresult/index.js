import {Line} from 'rc-progress'

import './index.css'

const emojisArray = [
  {
    id: 'neutral face',
    imageUrl:
      'https://res.cloudinary.com/dykjwqjqi/image/upload/v1726333226/pjtzn55nvcuolmfthe4t.png',
  },
  {
    id: 'grimacing face',
    imageUrl:
      'https://res.cloudinary.com/dykjwqjqi/image/upload/v1726333347/dunu9wrvxz5ualtmvpnz.png',
  },
  {
    id: 'slightly smiling face',
    imageUrl:
      'https://res.cloudinary.com/dykjwqjqi/image/upload/v1726333439/p6byz4risejovnic0dhe.png',
  },
  {
    id: 'grinning face with big eyes',
    imageUrl:
      'https://res.cloudinary.com/dykjwqjqi/image/upload/v1726333509/jtneib7lx4jnebqhplau.png',
  },
  {
    id: 'grinning face with smiling eyes',
    imageUrl:
      'https://res.cloudinary.com/dykjwqjqi/image/upload/v1726333574/ng46eem9fv2kthefgbej.png',
  },
  {
    id: 'beaming face with smiling eyes',
    imageUrl:
      'https://res.cloudinary.com/dykjwqjqi/image/upload/v1726333657/yg3a86oqoayd6fig0afi.png',
  },
  {
    id: 'grinning face',
    imageUrl:
      'https://res.cloudinary.com/dykjwqjqi/image/upload/v1726333724/pj3bzim8qosfmenwgubu.png',
  },
  {
    id: 'smiling face with sunglasses',
    imageUrl:
      'https://res.cloudinary.com/dykjwqjqi/image/upload/v1726333785/edopy5eebp1kbk35k5xs.png',
  },
]

const MMresult = props => {
  const {level, playAgain} = props

  const onClickPlayAgain = () => {
    playAgain()
  }

  return (
    <div className="mmResult-main-container">
      <div className="mmResult-top-container">
        <ul className="mmResult-emojies-ul-container">
          {emojisArray.map(each => (
            <li className="mmResult-emoji-list-item" key={each.id}>
              <img
                className="mmResult-emoji-image"
                src={each.imageUrl}
                alt={each.id}
              />
            </li>
          ))}
        </ul>
        <Line
          percent={(level / 15) * 100}
          strokeWidth={2}
          trailWidth={2}
          strokeColor="#467AFF"
        />
        <ul className="mmResult-levels-ul-container">
          <li className="mmResult-level-list-item">
            <p className="mmResult-level-text">Level 1</p>
          </li>
          <li className="mmResult-level-list-item">
            <p className="mmResult-level-text">Level 5</p>
          </li>
          <li className="mmResult-level-list-item">
            <p className="mmResult-level-text">Level 10</p>
          </li>
          <li className="mmResult-level-list-item">
            <p className="mmResult-level-text">Level 15</p>
          </li>
        </ul>
      </div>
      <h1 className="mmResult-congrats-text">Congratulations!</h1>
      <p className="mmResult-reached-level-text">
        You have reached level {level}
      </p>
      <button onClick={onClickPlayAgain} className="mmResult-play-again-btn">
        Play Again
      </button>
    </div>
  )
}

export default MMresult
