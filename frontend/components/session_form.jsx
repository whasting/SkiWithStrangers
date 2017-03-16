import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    console.log("PROCESSFORM", this.props.processForm(user));
    this.props.processForm(user);
  }

  componentWillReceiveProps(newProps) {
    this.props = newProps;
    this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
    if (this.props.loggedIn) {
			this.props.router.push("/resorts");
		}
  }

  handleChange(event) {
    event.preventDefault();
    if (event.target.type === 'text') {
      this.setState({username: event.target.value});
    } else if (event.target.type === 'password') {
      this.setState({password: event.target.value});
    }
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul>
          {
            this.props.errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))
          }
        </ul>
      );
    }
  }

  clearErrors() {

  }

  renderTabs() {
    let loginTab;
    let signupTab;
    if (this.props.formType === 'signup') {
      loginTab = 'not-active';
      signupTab = 'active';
    } else {
      loginTab = 'active';
      signupTab = 'not-active';
    }
    return (
      <header className="tabs">
        <div className={`tab1 ${loginTab}`}>
          <Link
            to="/login"
            className={loginTab}>Login</Link>
        </div>
        <div className={`tab2 ${signupTab}`}>
          <Link
            to="/signup"
            className={signupTab}>Signup</Link>
        </div>
      </header>
    );
  }

  renderForm() {
    if (this.props.formType === 'signup') {
      return (
        <div className="input-fields">
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Username" />
          <input
            type="password"
            value=""
            onChange={this.handleChange}
            placeholder="Password" />
          <input
            type="password"
            value=""
            onChange={this.handleChange}
            placeholder="Re-enter Password" />
          <input
            type="submit"
            onClick={this.handleSubmit}
            value="Sign Up" />
        </div>
      );
    } else {
      return (
        <div className="input-fields">
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Username" />
          <input
            type="password"
            value=""
            onChange={this.handleChange}
            placeholder="Password" />
          <input
            type="submit"
            onClick={this.handleSubmit}
            value="Log In" />
          <input
            type="submit"
            onClick={this.handleSubmit}
            value="Demo" />
        </div>
      );
    }

  }

  render() {
    let submit;
    if (this.props.formType === 'signup') {
      submit = 'Sign Up';
    } else {
      submit = 'Log In';
    }
    return (
      <div className="splash-container">
        <div className="splash">
          <div className="auth-form">
            {this.renderTabs()}
            {this.renderErrors()}
            {this.renderForm()}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
