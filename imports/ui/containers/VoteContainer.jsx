import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

const VotePage = ({}) => (
  <div className="container">
    Hello, voter!
  </div>
);

export default VoteContainer = createContainer(props => {
  return {
    user: Meteor.user(),
  };
}, VotePage);
