import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

const HomePage = ({}) => (
  <div className="container">
    Hello, homepage!
  </div>
);

export default HomeContainer = createContainer(props => {
  return {
    user: Meteor.user(),
  };
}, HomePage);
