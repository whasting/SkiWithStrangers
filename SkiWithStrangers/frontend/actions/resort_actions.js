import * as APIUtil from '../util/resort_api_util';

export const RECEIVE_RESORTS = 'RECEIVE_RESORTS';
export const RECEIVE_RESORT = 'RECEIVE_RESORT';
export const DELETE_RESORT = 'DELETE_RESORT';
export const CLEAR_RESORT = 'CLEAR_RESORT';
// export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

// thunk
// errors?

export const receiveResorts = () => dispatch => (
  APIUtil.receiveResorts()
    .then(resorts => dispatch(fetchResorts(resorts)))
);

export const receiveResort = id => dispatch => (
  APIUtil.receiveResort(id)
    .then(resort => dispatch(fetchResort(resort)))
);

export const createResort = resort => dispatch => (
  APIUtil.createResort(resort)
    .then(newResort => dispatch(fetchResort(newResort)))
);

export const updateResort = resort => dispatch => (
  APIUtil.updateResort(resort)
    .then(updatedResort => dispatch(fetchResort(updatedResort)))
);

export const deleteResort = resort => dispatch => (
  APIUtil.deleteResort(resort)
    .then((deletedResort) => dispatch(fetchResort(deletedResort)))
);

//sync

const fetchResorts = resorts => ({
  type: RECEIVE_RESORTS,
  resorts
});

const fetchResort = resort => ({
  type: RECEIVE_RESORT,
  resort
});

export const clearResort = resort => ({
  type: CLEAR_RESORT,
  resort
});
