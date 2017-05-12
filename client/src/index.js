import React from 'react';
import ReactDOM from 'react-dom';
import {Router,
        Route,
        browserHistory,
        IndexRoute}
        from 'react-router'

import App from './App';
import {HomeContainer,
        AboutContainer}
        from './containers'


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/home" component={HomeContainer} />
      <IndexRoute component={HomeContainer} />
      <Route path="/about" component={AboutContainer} />
    </Route>
  </Router>,
  document.getElementById('root')
);
