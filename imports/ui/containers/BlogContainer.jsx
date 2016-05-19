import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

const BlogPage = ({}) => (
  <div className="container">
    Hello, blogpage!
  </div>
);

export default BlogContainer = createContainer(props => {
  return {
    user: Meteor.user(),
  };
}, BlogPage);
