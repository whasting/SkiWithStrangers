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
        <div className="logo">
          <img type="image/png" href="../app/assets/images/sws_logo.png" />
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
          <img src="assets/images/sws_logo.png" />
          <h1>Ski With Strangers</h1>
        </div>
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
