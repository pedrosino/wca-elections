import React from 'react';
import Candidate from './candidate' 
import { createContainer } from 'meteor/react-meteor-data';

class CandidateList extends React.Component {
  componentWillReceiveProps (props) {
    console.log(7,props)
  }

  render () {
    console.log(this.props.candidates);
    return (
      <div>
        {this.props.candidates.map((candidate, index) =>
          <Candidate key={index} candidate={candidate} initialVote={this.props.initialVotes[candidate.id]}/>
        )}
      </div>
    );
  }
}

export default createContainer(props => {
  return {
    user: Meteor.user(),
  };
}, CandidateList);
