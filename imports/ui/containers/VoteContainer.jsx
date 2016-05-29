import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import CandidateList from '../components/candidate-list';
import { Vote, Votes } from '/imports/collections';
import { throwUnlessUser, canVote } from '/imports/permissions';

import moment from 'moment';
import { candidates, endMoment } from '/imports/parsed-election-config';

class VotePage extends React.Component {
  logIn(e) {
    // Rather than calling Meteor.loginWithWorldcubeassociation, we can just
    // click the login button which we know must exist. See
    //  https://github.com/ianmartorell/meteor-accounts-ui-bootstrap-3/blob/443e852cb0471fa83c090119e64d10b9a5eb9355/login_buttons_single.js#L23-L33
    e.preventDefault( );
    $('.login-button').click();
  }

  render() {
    let { user, vote } = this.props;

    if(!user) {
      return (
        <div className="container">
          You must <a href="#" onClick={this.logIn}>log in</a> order to vote.
        </div>
      );
    } else if (!canVote(user)) {
      return (
        <div className="container">
          You can not vote.
        </div>
      );
    } else {
      let wcaUser = user.services.worldcubeassociation;
      let messages = [];

      if (!vote.isComplete()) {
        messages.push({
          type: 'danger',
          text: 'You have not voted for all candidates. Your vote will not be counted until you have voted for everyone.',
        });
      } else {
        messages.push({
          type: 'success',
          text: 'Your vote has been stored in our database! For your convinience, you can change your vote until the election deadline has passed.',
        });
      }

      messages.push({
        type: "info",
        text: `The election ends ${endMoment.fromNow()} on ${endMoment.format()}`,
      });

      return (
        <div className="container">
          Hello, {wcaUser.name}!
          Your WCA ID is {wcaUser.wca_id}.
          {messages.map((message, index) =>
            <div key={index} className={`alert alert-${message.type}`}>
              {message.text}
            </div>
          )}
          <h2>Candidates:</h2>
          <CandidateList votes={vote.votes} candidates={candidates}/>
        </div>
      );
    }
  }
};

export default VoteContainer = createContainer(props => {
  const votesHandle = Meteor.subscribe('myVotes');
  const loading = !votesHandle.ready();
  let vote;

  if (Meteor.userId()) {
    vote = Votes.findOne({userId: Meteor.userId()})
  }

  if (!vote) {
    vote = new Vote();
  }

  return {
    loading,
    vote,
    user: Meteor.user(),
  };
}, VotePage);
