import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home/Home';
import Leagues from './components/Leagues/Leagues';
import LeagueDetail from './components/LeagueDetails/LeagueDetail';
import Header from './components/Header/Header';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/league/:id">
           <LeagueDetail></LeagueDetail>
        </Route>
        <Route exact path="/league">
             <Home/>
        </Route>
        <Route exact path="/">
             <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
