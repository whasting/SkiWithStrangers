import React from 'react';
import { Link, withRouter } from 'react-router';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.sessionLinks = this.sessionLinks.bind(this);
    this.personalGreeting = this.personalGreeting.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  sessionLinks() {
    return (
      <nav className="navbar">
        <div className="logo">
          <h1>Ski With Strangers</h1>
        </div>
        <div className="nav-buttons">
          <Link
            to="/signup"
            activeClassName="current"
            className="nav-button">Sign Up</Link>
          <Link
            to="/login"
            activeClassName="current"
            className="nav-button">Log In</Link>
        </div>
      </nav>
    );
  }

  personalGreeting() {
    return (
      <nav className="navbar">
        <div className="logo">
          <h1>Ski With Strangers</h1>
        </div>
        <div className="nav-buttons">
          <Link
            onClick={this.handleLogout}
            className="nav-button">Log Out</Link>
        </div>
      </nav>
    );
  }

  handleLogout() {
    this.props.logout();
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

export default withRouter(Greeting);
