import { connect } from 'react-redux';
import Resorts from './resorts';

import { receiveResorts } from '../../actions/resort_actions';
import { selectAllResorts } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return ({
  currentUser: state.session.currentUser,
  resorts: selectAllResorts(state)
});};

const mapDispatchToProps = (dispatch) => ({
  receiveResorts: () => dispatch(receiveResorts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Resorts);


// QUESTION: when to use ownProps
