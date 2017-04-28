import * as APIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const CLEAR_EVENT = 'CLEAR_EVENT';
export const CLEAR_EVENTS = 'CLEAR_EVENTS';
//thunk

export const receiveEvents = (resortId, userId) => dispatch => (
  APIUtil.receiveEvents(resortId, userId)
    .then(events => dispatch(fetchEvents(events)))
);

export const receiveEvent = id => dispatch => (
  APIUtil.receiveEvent(id)
    .then(event => dispatch(fetchEvent(event)))
);

export const createEvent = event => dispatch => (
  APIUtil.createEvent(event)
    .then(newEvent => dispatch(fetchEvent(newEvent)))
);

export const updateEvent = event => dispatch => (
  APIUtil.updateEvent(event)
    .then(updatedEvent => dispatch(fetchEvent(updatedEvent)))
);

export const deleteEvent = id => dispatch => (
  APIUtil.deleteEvent(id)
    .then(deletedEvent => dispatch(fetchEvent(deletedEvent)))
);

//sync

export const fetchEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

export const fetchEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const clearEvent = event => ({
  type: CLEAR_EVENT,
  event
});

export const clearEvents = events => ({
  type: CLEAR_EVENTS,
  event
});
