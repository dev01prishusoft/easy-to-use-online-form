import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import RegisterForm from './registrationForm/RegisterForm.js';
import PostViewer from './PostViewer.js';

class App extends Component {
  render() {
    return (
      <main>
        <Router>
        <div>
          <Switch>
            <Route exact path='/' component={RegisterForm} />
          </Switch>
        </div>
      </Router>
      <PostViewer />
      </main>

    );
  }
}

export default App;
