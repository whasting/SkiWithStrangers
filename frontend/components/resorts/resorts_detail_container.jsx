import { connect } from 'react-redux';
import ResortsDetail from './resorts_detail';

import { selectResort } from '../../reducers/selectors';
import { receiveResort } from '../../actions/resort_actions';

const mapStateToProps = state => ({
  resort: selectResort(state)
});

const mapDispatchToProps = dispatch => ({
  receiveResort: id => dispatch(receiveResort(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResortsDetail);