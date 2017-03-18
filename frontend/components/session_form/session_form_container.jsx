import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login,
         signup,
         clearErrors,
         receiveErrors} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let form = "";
  if (ownProps.location.pathname === "/signup") {
    form = "signup";
  } else {
    form = "login";
  }
  return ({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    formType: form
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;
  if (ownProps.location.pathname === "/signup") {
    action = signup;
  } else {
    action = login;
  }
  return ({
    processForm: user => dispatch(action(user)),
    clearErrors: () => dispatch(clearErrors()),
    receiveErrors: (error) => dispatch(receiveErrors(error))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
