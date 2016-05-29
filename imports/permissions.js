import { Meteor } from 'meteor/meteor';

export const canVote = function(user) {
  let wca = user.services.worldcubeassociation;
  return (
    wca.delegate_status === "board_member" ||
    wca.delegate_status === "senior_delegate" ||
    wca.delegate_status === "delegate" ||
    wca.teams.some(team => team.leader)
  );
};

export const canViewResults = function(user) {
  return true;
}

export const throwUnlessUser = function(canUserDoFunc, userId) {
  let user = Meteor.users.findOne(userId);

  var actionName = canUserDoFunc.name.substring("can".length);
  actionName = actionName[0].toLowerCase() + actionName.substring(1);
  if(!user) {
    throw new Meteor.Error(401, `You must be logged in to ${actionName}`);
  }
  if(!canUserDoFunc(user)) {
    throw new Meteor.Error(403, `User: ${userId} is not allowed to ${actionName}`);
  }
};
