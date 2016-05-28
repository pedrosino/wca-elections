import { Votes } from '/imports/collections';

Meteor.methods({
  'vote' (userVote) {
    console.log(this.userId, userVote)

    let vote = Votes.findOne({
      userId: this.userId
    });

    console.log(11, !!vote);
    if (vote) {
      vote.votes[userVote.candidate.id] = userVote.vote
      Votes.update(vote._id, vote);
    } else {
      Votes.insert({
        userId: this.userId,
        votes: [{
          name: userVote.candidate.name,
          vote: userVote.candidate.vote
        }]
      });
    }
  }
});
