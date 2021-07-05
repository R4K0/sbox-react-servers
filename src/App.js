import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/navbar';
import GamesPage from './Pages/games';

function App() {
  return (
    <Router>
      <div>
        <div className="pb-8">
          <h1 className="text-white font-bold text-3xl drop-shadow-2xl inline-block">s&box servers</h1>
          <text className="text-white text-sm font-normal pl-2">there are 0 players playing on 0 servers in total</text>
          <Navbar></Navbar>
        </div>

        <content>
          <Switch>
            <Route path="/"></Route>
            <Route path="/games" component={GamesPage}></Route>
            <Route path="/orgs"></Route>
          </Switch>
        </content>
      </div>
    </Router>
  );
}

export default App;
