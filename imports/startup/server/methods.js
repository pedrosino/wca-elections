import { Votes } from '/imports/collections';
import { throwUnlessUser, canVote } from '/imports/permissions';

const ALLOWED_PREFERENCES = ["yes", "no", "neutral"];

Meteor.methods({
  'vote' ({candidateId, preference}) {
    throwUnlessUser(canVote, this.userId);

    if(ALLOWED_PREFERENCES.indexOf(preference) === -1) {
      throw new Meteor.Error(400,
          `Preference ${preference} unrecognized. Must be one of ${ALLOWED_PREFERENCES}`);
    }

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
