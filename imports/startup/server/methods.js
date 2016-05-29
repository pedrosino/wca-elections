import { Votes } from '/imports/collections';
import { throwUnlessUser, canVote } from '/imports/permissions';

Meteor.methods({
  'vote' ({candidateId, preference}) {
    throwUnlessUser(canVote, this.userId);

    let vote = Votes.findOne({
      userId: this.userId
    });

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
