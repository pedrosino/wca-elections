import React from 'react';

class Candidate extends React.Component {
  vote (preference) {
    Meteor.call('vote', {
      candidateId: this.props.candidate.id,
      preference,
    });
  }

  render () {
    return (
      <div style={{padding: '10px'}}>
        <h3>{this.props.candidate.name}</h3>
        <div className='btn-group' role='group' aria-label='...'>
          <button type='button' className={`btn ${this.props.preference === 'yes' ? 'active btn-success' : 'btn-default'}`} onClick={() => this.vote('yes')}>Yes</button>
          <button type='button' className={`btn ${this.props.preference === 'neutral' ? 'active btn-success' : 'btn-default'}`} onClick={() => this.vote('neutral')}>Neutral</button>
          <button type='button' className={`btn ${this.props.preference === 'no' ? 'active btn-success' : 'btn-default'}`} onClick={() => this.vote('no')}>No</button>
        </div>
      </div>
    );
  }
}

export default Candidate;
