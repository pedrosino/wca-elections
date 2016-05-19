import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

const HomePage = ({user}) => {
  let userDataDiv = null;
  if(user) {
    let wcaUser = user.services.worldcubeassociation;
    userDataDiv = (
      <div>
        {wcaUser.name} {wcaUser.wca_id}
      </div>
    );
  }
  return (
    <div className="container">
      Hello, homepage!
      {userDataDiv}
    </div>
  );
};

export default HomeContainer = createContainer(props => {
  return {
    user: Meteor.user(),
  };
}, HomePage);
