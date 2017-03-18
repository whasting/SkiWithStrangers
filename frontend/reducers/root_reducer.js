import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ResortsReducer from './resorts_reducer';
import ResortReducer from './resort_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  resorts: ResortsReducer,
  resort: ResortReducer
});

export default RootReducer;

// QUESTION: do I need a separate reducer for resorts and resort?
