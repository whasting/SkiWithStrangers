import { connect } from 'react-redux';
import HostForm from './host_form';

const mapStateToProps = state => {
  return ({
    events: state.events
  });
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostForm);
