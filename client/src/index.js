import React from 'react';
import ReactDOM from 'react-dom';
import {Router,
        Route,
        browserHistory,
        IndexRoute}
        from 'react-router'
import SignUpContainer from './userAuth/SignUpContainer';
import LoginContainer from './userAuth/LoginContainer';

require('bootstrap/dist/css/bootstrap.css')

import App from './App';
import {HomeContainer,
        AboutContainer,
        ArticlesContainer,
        PostArticleContainer,
        EditArticleContainer,
        SingleArticleContainer,
        CommentsContainer}
        from './containers'



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomeContainer} />
      <Route path="/home" component={HomeContainer} />
      <Route path="/about" component={AboutContainer} />
      <Route path="/articles" component={ArticlesContainer} />
      <Route path="/post_article" component={PostArticleContainer} />
      <Route path="/edit_article/:articleId" component={EditArticleContainer} />
      <Route path="/single_article/:articleId" component={SingleArticleContainer}/>
      <Route path="/comments/:articleId" component={CommentsContainer}/>
      <Route path="/signup" component={SignUpContainer}/>
      <Route path="/login" component={LoginContainer}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
