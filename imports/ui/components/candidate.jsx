import React from 'react';

class Candidate extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      vote: undefined // 1,0,-1
    };
  }

  vote (vote) {
    console.log(vote);
    this.setState({
      vote: vote
    });

    Meteor.call('vote', {
      name: this.props.name,
      vote
    });
  }

  render () {
    return (
      <div style={{padding: '10px'}}>
        <h3>{this.props.name}</h3>
        <div class='btn-group' role='group' aria-label='...'>
          <button type='button' className={`btn btn-default ${this.state.vote === 1 ? 'active' : ''}`} onClick={() => this.vote(1)}>Yes</button>
          <button type='button' className={`btn btn-default ${this.state.vote === 0 ? 'active' : ''}`} onClick={() => this.vote(0)}>Neutral</button>
          <button type='button' className={`btn btn-default ${this.state.vote === -1 ? 'active' : ''}`} onClick={() => this.vote(-1)}>No</button>
        </div>
      </div>
    );
  }
}

export default Candidate;