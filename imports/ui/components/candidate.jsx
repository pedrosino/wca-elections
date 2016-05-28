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
        <div>
          <div style={{display: 'inline-block', paddingLeft: '5%', paddingRight: '5%', backgroundColor: this.state.vote === 1 ? 'grey' : 'white'}} onClick={() => this.vote(1)}>Yes</div>
          <div style={{display: 'inline-block', paddingLeft: '5%', paddingRight: '5%', backgroundColor: this.state.vote === 0 ? 'grey' : 'white'}} onClick={() => this.vote(0)}>Neutral</div>
          <div style={{display: 'inline-block', paddingLeft: '5%', paddingRight: '5%', backgroundColor: this.state.vote === -1 ? 'grey' : 'white'}} onClick={() => this.vote(-1)}>No</div>
        </div>
      </div>
    );
  }
}

export default Candidate;