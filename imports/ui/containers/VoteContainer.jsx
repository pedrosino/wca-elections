import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import CandidateList from '../components/candidate-list' 

const Candidates = require('../../candidates');

class VotePage extends React.Component {
  logIn(e) {
    // Rather than calling Meteor.loginWithWorldcubeassociation, we can just
    // click the login button which we know must exist. See
    //  https://github.com/ianmartorell/meteor-accounts-ui-bootstrap-3/blob/443e852cb0471fa83c090119e64d10b9a5eb9355/login_buttons_single.js#L23-L33
    e.preventDefault( );
    $('.login-button').click();
  }

  render() {
    let { user } = this.props;

    if(!user) {
      return (
        <div className="container">
          You must <a href="#" onClick={this.logIn}>log in</a> order to vote.
        </div>
      );
    } else {
      let wcaUser = user.services.worldcubeassociation;
      return (
        <div className="container">
          Hello, {wcaUser.name}!
          Your WCA ID is {wcaUser.wca_id}.

          <h2>Candidates:</h2>
          <CandidateList candidates={Candidates}/>
        </div>
      );
    }
  }
};

export default VoteContainer = createContainer(props => {
  return {
    user: Meteor.user(),
  };
}, VotePage);
