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

  vote (vote) {
    console.log(vote);
    this.setState({
      vote: vote
    });

    Meteor.call('vote', {
      candidate: this.props.candidate,
      vote
    });
  }

  render () {
    return (
      <div style={{padding: '10px'}}>
        <h3>{this.props.name}</h3>
        <div className='btn-group' role='group' aria-label='...'>
          <button type='button' className={`btn btn-default ${this.state.vote === 1 ? 'active' : ''}`} onClick={() => this.vote(1)}>Yes</button>
          <button type='button' className={`btn btn-default ${this.state.vote === 0 ? 'active' : ''}`} onClick={() => this.vote(0)}>Neutral</button>
          <button type='button' className={`btn btn-default ${this.state.vote === -1 ? 'active' : ''}`} onClick={() => this.vote(-1)}>No</button>
        </div>
      </div>
    );
  }
}

export default Candidate;