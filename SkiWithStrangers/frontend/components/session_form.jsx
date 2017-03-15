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

  render() {
    let oppositePath;
    let pathLabel;
    let header;
    if (this.props.formType === 'signup') {
      header = 'Signup';
      oppositePath = '/login';
      pathLabel = 'Login';
    } else {
      header = 'Login';
      oppositePath = '/signup';
      pathLabel = 'Signup';
    }
    return (
      <div className="splash-container">
        <div className="splash">
          <div className="auth-form">
            <header><h2>{header}</h2></header>
            <br />
            <Link to={oppositePath}>{pathLabel}</Link>
            <br />
            <br />
            {this.renderErrors()}
            <label>Username
              <br />
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleChange} />
            </label>
            <br />
            <label>Password
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleChange} />
            </label>
            <br />
            <input
              type="submit"
              onClick={this.handleSubmit}
              value="Submit" />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
