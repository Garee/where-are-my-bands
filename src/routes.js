import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import App from './components/app';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}></Route>
  </Router>
);
