import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

const HomePage = ({}) => {
  return (
    <div className="container">
      Hello, world!
    </div>
  );
};

export default HomeContainer = createContainer(props => {
  return {
  };
}, HomePage);
