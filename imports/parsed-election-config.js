import config from '/imports/election-config';
import moment from 'moment';

export const candidates = config.candidates.map(candidateName => {
  return {
    name: candidateName,
    id: candidateName,
  };
});

export const startMoment = moment(config.start, "YYYY-MM-DD HH:mm Z");

export const endMoment = moment(config.end, "YYYY-MM-DD HH:mm Z");
