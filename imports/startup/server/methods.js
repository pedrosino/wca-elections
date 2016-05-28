import { Votes } from '/imports/collections';
import { throwUnlessUser, canVote } from '/imports/permissions';

Meteor.methods({
  'vote' (vote) {
    throwUnlessUser(canVote, this.userId);

    console.log(this.userId, vote)
    Votes.upsert({
      userId: this.userId,
    }, {
      userId: this.userId,
      votes: [{
        name: vote.name,
        vote: vote.vote
      }]
    });
  }
});
