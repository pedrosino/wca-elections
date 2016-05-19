import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { createContainer } from 'meteor/react-meteor-data';

const HomePage = ({content}) => (
  <div className="container">
    Hello, homepage!
    <a href={FlowRouter.path('blog')}>blog</a>
  </div>
);

export default HomeContainer = createContainer(props => {
  return {
    user: Meteor.user(),
  };
}, HomePage);
