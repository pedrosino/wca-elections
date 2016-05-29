import { Votes } from '/imports/collections';
import { throwUnlessUser, canVote } from '/imports/permissions';

Meteor.methods({
  'vote' ({candidateId, preference}) {
    throwUnlessUser(canVote, this.userId);

    console.log(this.userId, preference)

    let vote = Votes.findOne({
      userId: this.userId
    });

    console.log(11, !!vote);
    if (vote) {
      vote.votes[candidateId] = preference;
      Votes.update(vote._id, vote);
    } else {
      Votes.insert({
        userId: this.userId,
        votes: {
          [candidateId]: preference,
        }
      });
    }
  }
});
