import _ from 'lodash';
import candidates from '/imports/candidates';

export const Votes = new Mongo.Collection('Votes', {
  transform(doc) {
    return new Vote(doc);
  }
});

export class Vote {
  constructor(doc = {}) {
    doc.votes = doc.votes || [];

    _.assignIn(this, doc);
  }

  isComplete() {
    let expectedCandidateIds = candidates.map(candidate => candidate.id);
    let existingCandidateIds = Object.keys(this.votes);
    let notFoundCandidateIds = _.difference(expectedCandidateIds, existingCandidateIds);

    return notFoundCandidateIds.length == 0;
  }
}
