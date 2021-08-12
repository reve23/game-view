import react from 'react'
import Slider from './components/Slider'
import Nav from './components/Nav'
import Games from './components/Games'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import GameDetail from './components/GameDetail'

function App() {

  return (
    <div>
      <Nav />
      <div className="mx-2">

      <Slider/>
      </div>
      <p className="mx-5 my-4 fs-1">GAMES</p>
      <hr/>
      <hr />
      <Router>
        <Switch>
          <Route path="/" exact component={Games}/>
          <Route path="/:id" component={GameDetail} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
