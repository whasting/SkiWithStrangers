import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let form = "";
  if (ownProps.location.pathname === "/login") {
    form = "login";
  } else {
    form = "signup";
  }
  return ({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    formType: form
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;
  if (ownProps.location.pathname === "/login") {
    action = login;
  } else {
    action = signup;
  }
  return ({processForm: user => dispatch(action(user))});
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
