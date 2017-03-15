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
      <nav className="navbar">
        <h1 className="logo">
          Ski With Strangers</h1>
        <div className="nav-buttons">
          <Link
            to="/signup"
            activeClassName="current"
            className="nav-button">Signup</Link>
          <Link
            to="/login"
            activeClassName="current"
            className="nav-button">Login</Link>
        </div>
      </nav>
    );
  }

  personalGreeting() {
    return (
      <nav className="navbar">
        <h1 className="logo">Ski With Strangers</h1>
        <div className="nav-buttons">
          <Link
            onClick={this.props.logout}
            className="nav-button">Log Out</Link>
        </div>
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
