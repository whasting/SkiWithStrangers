import values from 'lodash/values';
import { receiveResorts } from '../actions/resort_actions';

export const selectAllResorts = ({ resorts }) => {
  return values(resorts);
};

export const selectResort = ({ resort }) => {
  return values(resort)[0];
};

export const selectEvent = ({ event }) => {
  return values(event)[0];
};

export const selectEvents = ({ events }) => {
  return values(events);
};
