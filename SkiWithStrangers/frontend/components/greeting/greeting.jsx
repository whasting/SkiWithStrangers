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
              src="https://res.cloudinary.com/whasting/image/upload/c_scale,h_60,w_60/v1489951965/skier_iqb8ty.png"
              className="logo-img"/>
          </div>
          <div className="logo-text">
            <h1>Ski With Strangers</h1>
          </div>
        </div>
      </nav>
    );
  }

  personalGreeting() {
    let pathName = this.props.location.pathname;
    let dashboardClass = "nav-button-logged-in";
    let resAndEvClass = "nav-button-logged-in";

    if (pathName.slice(0, 8) === "/resorts") {
      resAndEvClass = "nav-button-logged-in active";
    } else {
      dashboardClass = "nav-button-logged-in active";
    }

    return (
      <nav className="navbar">
        <div className="logo">
          <div className="logo-img">
            <img
              src="https://res.cloudinary.com/whasting/image/upload/c_scale,h_60,w_60/v1489951965/skier_iqb8ty.png"
              className="logo-img"/>
          </div>
          <div className="logo-text">
            <h1>Ski With Strangers</h1>
          </div>
        </div>
        <div className="nav-buttons-logged-in">
          <Link
            to="/dashboard"
            activeClassName="current"
            className={`${dashboardClass}`}>Dashboard</Link>
          <Link
            to="/resorts"
            activeClassName="current"
            className={`${resAndEvClass}`}>Resorts and Events</Link>
          <Link
            onClick={this.handleLogout}
            className="nav-button-logged-in">Log Out</Link>
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
