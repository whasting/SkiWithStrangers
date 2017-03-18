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
          <div className="logo-img">
            <img
              src="http://res.cloudinary.com/whasting/image/upload/c_scale,h_50,w_50/v1489789326/ski_mask_gfqgc3.png"
              className="logo-img"/>
          </div>
          <div className="logo-text">
            <h1>Ski With Strangers</h1>
          </div>
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
          <div className="logo-img">
            <img
              src="http://res.cloudinary.com/whasting/image/upload/c_scale,h_50,w_50/v1489789326/ski_mask_gfqgc3.png"
              className="logo-img"/>
          </div>
          <div className="logo-text">
            <h1>Ski With Strangers</h1>
          </div>
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
