import values from 'lodash/values';
import { receiveResorts } from '../actions/resort_actions';

export const selectAllResorts = ({ resorts }) => {
  return values(resorts);
};

export const selectResort = ({ resort }) => {
  return values(resort)[0];
};

export const selectEvent = ({ event }) => {
  return values(event);
};

export const selectEvents = ({ events }) => {
  return values(events);
};

export const selectGuests = ({ guests }) => {
  return values(guests);
};

export const selectAttendances = ({ attendances }) => {
  return values(attendances);
};
