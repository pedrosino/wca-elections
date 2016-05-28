Meteor.methods({
  'vote' (vote) {
    console.log(this.userId, vote)
    Votes.upsert({
      userId: this.userId,
    }, {
      votes: [{
        name: vote.name,
        vote: vote.vote
      }]
    });
  }
});
