import React from 'react';

class Candidate extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      vote: props.initialVote // 1,0,-1
    };
  }

  componentWillReceiveProps (props) {
    console.log(8, this.state.vote, props);
    this.state.vote = props.initialVote;
  }

  vote (preference) {
    console.log(preference);
    this.setState({
      vote: preference
    });

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
          <button type='button' className={`btn btn-default ${this.state.vote === 'yes' ? 'active' : ''}`} onClick={() => this.vote('yes')}>Yes</button>
          <button type='button' className={`btn btn-default ${this.state.vote === 'neutral' ? 'active' : ''}`} onClick={() => this.vote('neutral')}>Neutral</button>
          <button type='button' className={`btn btn-default ${this.state.vote === 'no' ? 'active' : ''}`} onClick={() => this.vote('no')}>No</button>
        </div>
      </div>
    );
  }
}

export default Candidate;