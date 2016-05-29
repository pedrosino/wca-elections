import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ResultsPage from '/imports/ui/pages/Results.jsx';
import { candidates } from '/imports/parsed-election-config';
import { Votes } from '/imports/collections';
import _ from 'lodash';

export default Results = createContainer(props => {
  const resultsHandle = Meteor.subscribe('results');

  let user = Meteor.user();
  let votes = Votes.find({}).fetch().filter(vote => vote.isComplete());

  let results = candidates.map(candidate => {
    // We start with some initial zeroed data because countBy won't be aware
    // a particular preference exists because nobody expressed it.
    let emptyPreferences = {
      name: candidate.name,
      no: 0,
      neutral: 0,
      yes: 0,
    };

    return _.assignIn(emptyPreferences, _.countBy(votes, vote => vote.votes[candidate.id]));
  });

  return {
    results,
    user,
  };
}, ResultsPage);
