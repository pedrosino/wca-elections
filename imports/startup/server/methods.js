import { Votes } from '/imports/collections';
import { throwUnlessUser, canVote } from '/imports/permissions';

Meteor.methods({
  'vote' (userVote) {
    throwUnlessUser(canVote, this.userId);

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
