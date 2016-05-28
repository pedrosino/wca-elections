import { Votes } from '/imports/collections';

Meteor.publish(null, function() {
  if(!this.userId) {
    return [];
  }
  return Meteor.users.find(this.userId, {
    fields: {
      emails: 1,
      profile: 1,
      name: 1,
      'services.worldcubeassociation': 1,
    }
  });
});

Meteor.publish('myVotes', function() {
  if(!this.userId) {
    return [];
  }
  return Votes.find({ userId: this.userId });
});
