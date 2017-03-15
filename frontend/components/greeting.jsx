import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.sessionLinks = this.sessionLinks.bind(this);
    this.personalGreeting = this.personalGreeting.bind(this);
  }

  sessionLinks() {
    return (
      <nav className="login-signup">
        <Link to="/login" activeClassName="current">Login</Link>
        <br />
        <Link to="/signup" activeClassName="current">Signup</Link>
      </nav>
    );
  }

  personalGreeting() {
    return (
      <nav className="navbar">
        <button
          className="navbar-button" onClick={this.props.logout}>Log Out
        </button>
      </nav>
    );
  }

  render() {
    let greet;
    if (this.props.currentUser) {
      greet = this.personalGreeting();
    } else {
      greet = this.sessionLinks();
    }
    return (
      <div>
        {greet}
      </div>
    );
  }
}

export default Greeting;
