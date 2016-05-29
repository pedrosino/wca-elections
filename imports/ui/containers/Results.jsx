import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ResultsPage from '/imports/ui/pages/Results.jsx';

export default Results = createContainer(props => {
  const votesHandle = Meteor.subscribe('myVotes');

  let results = [
    {
      name: 'Caleb Vacuum',
      neutral: 0,
      no: 8,
      yes: 9,
    },
    {
      name: 'James LaChance',
      neutral: 7,
      no: 2,
      percent: 80,
    },
    {
      name: 'Jeremy Fleischman',
      neutral: 0,
      no: 0,
      yes: 17,
    },
    {
      name: 'Keaton Ellis',
      neutral: 5,
      no: 9,
      yes: 3,
    },
    {
      name: 'Kit Clement',
      neutral: 7,
      no: 5,
      yes: 5,
    },
  ];

  return {
    results,
  };
}, ResultsPage);
