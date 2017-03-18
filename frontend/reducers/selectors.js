import values from 'lodash/values';
import { receiveResorts } from '../actions/resort_actions';

export const selectAllResorts = ({ resorts }) => {
  return values(resorts);
};
