import {Switch, Redirect, Route} from 'react-router-dom'

import './App.css'

import HomeGames from './components/HomeGames'

import EmojiRules from './components/EmojiGame/EmojiRules'

import RPSrules from './components/RPSgame/RPSrules'

import MMrules from './components/MMgame/MMrules'

import CardFlipRules from './components/CardFlipGame/CardFlipRules'

const App = () => (
  <Switch>
    <Route exact path="/" component={HomeGames} />
    <Route exact path="/emoji-game" component={EmojiRules} />
    <Route exact path="/rock-paper-scissor" component={RPSrules} />
    <Route exact path="/memory-matrix" component={MMrules} />
    <Route exact path="/card-flip-memory-game" component={CardFlipRules} />
  </Switch>
)

export default App
