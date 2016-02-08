import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import login from './components/auth/Login';
// import start from './components/internalFiles/start';

export default class AppRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Route path='/' component={login} />
      </Router>
    );
  }
}
