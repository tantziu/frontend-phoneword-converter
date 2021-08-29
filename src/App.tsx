import React from 'react';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom'
import Home from './pages/Home'
import '../src/styles/App.scss';

const App = () => {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/" render={()=> (
          <React.Fragment>
            <Home/>
          </React.Fragment>
        )}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
