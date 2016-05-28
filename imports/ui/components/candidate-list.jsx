import React from 'react';
import Candidate from './candidate' 
import { createContainer } from 'meteor/react-meteor-data';

class CandidateList extends React.Component {
  render () {
    console.log(this.props.candidates);
    return (
      <div>
        {this.props.candidates.map((candidate, index) =>
          <Candidate key={index} name={candidate.name}/>
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
