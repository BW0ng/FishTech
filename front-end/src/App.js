import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import LookupPage from './pages/Lookup';
import 'bootstrap/dist/css/bootstrap.min.css';

  class App extends Component {
    render() {
      return (
        <Router>
          <React.Fragment>
            <main className="main-content">
              <Switch>
                <Redirect from="/" to="/home" exact />
                <Route path="/home" component={HomePage} />
                <Route path="/lookup" component={LookupPage} />
              </Switch>
            </main>
          </React.Fragment>
        </Router>
      );
    }
  }
  
  export default App;