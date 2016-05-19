import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { createContainer } from 'meteor/react-meteor-data';

const BlogPage = ({content}) => (
  <div className="container">
    Hello, blogpage!
    <a href={FlowRouter.path('home')}>home</a>
  </div>
);

export default BlogContainer = createContainer(props => {
  return {
    user: Meteor.user(),
  };
}, BlogPage);
