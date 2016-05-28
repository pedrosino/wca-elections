Meteor.methods({
  'vote' (vote) {
    console.log(this.userId, vote)
    Votes.upsert({
      _id: this.userId,
    }, {
      votes: [{
        name: vote.name,
        vote: vote.vote
      }]
    });
  }
});
