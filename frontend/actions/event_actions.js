import * as APIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';

//thunk

export const receiveEvents = () => dispatch => (
  APIUtil.receiveEvents()
    .then(events => dispatch(fetchEvents(events)))
);

export const receiveEvent = id => dispatch => (
  APIUtil.reciveEvent(id)
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

const fetchEvents = events => ({
  action: RECEIVE_EVENTS,
  events
});

const fetchEvent = event => ({
  action: RECEIVE_EVENT,
  event
});