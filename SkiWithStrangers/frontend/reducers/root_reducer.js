import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ResortsReducer from './resorts_reducer';
import ResortReducer from './resort_reducer';
import EventsReducer from './events_reducer';
import EventReducer from './event_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  resorts: ResortsReducer,
  resort: ResortReducer,
  events: EventsReducer,
  event: EventReducer
});

export default RootReducer;
