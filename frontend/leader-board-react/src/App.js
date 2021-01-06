import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './pages/Home';
import EnterMarks from './pages/EnterMarks';
import ViewLeaderboard from './pages/ViewLeaderboard';

function App() {
    return (
      <div className="App">
        <nav />
        <Router>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/enter_marks' component={EnterMarks} />
            <Route exact path='/view_leaderboard' component={ViewLeaderboard} />
          </Switch>

        </Router>
      </div>
    );
}

export default App;
