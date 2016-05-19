import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import AppContainer from '/imports/ui/containers/AppContainer';
import HomeContainer from '/imports/ui/containers/HomeContainer';
import BlogContainer from '/imports/ui/containers/BlogContainer';

import NotFoundPage from '/imports/ui/pages/NotFoundPage';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={HomeContainer}/>
      <Route path="blog" component={BlogContainer}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
);

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('react-root'));
});
