import React from 'react';
import { Link, withRouter } from 'react-router';
import SessionFormContainer from '../session_form/session_form_container';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    transition: 'background-color 0.75s'
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '300px',
    padding: '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    backgroundColor: 'transparent'
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.sessionLinks = this.sessionLinks.bind(this);
    this.personalGreeting = this.personalGreeting.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement(document.getElementById('root'));
  }

  openModal() {
    this.setState({modalOpen: true});
  }

  closeModal() {
    this.setState({modalOpen: false});
  }

  sessionLinks() {
    return (
      <nav className="navbar">
        <div className="logo">
          <div className="logo-img">
            <img
              src="http://res.cloudinary.com/whasting/image/upload/c_scale,h_60,w_60/v1489951965/skier_iqb8ty.png"
              className="logo-img"/>
          </div>
          <div className="logo-text">
            <h1>Ski With Strangers</h1>
          </div>
        </div>
        <div
          className="nav-buttons"
          onClick={this.openModal}>
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
              src="http://res.cloudinary.com/whasting/image/upload/c_scale,h_60,w_60/v1489951965/skier_iqb8ty.png"
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
        <div className="landing-wrapper">
          <h1 className="landing-message">Get Out and Ski... With Strangers!</h1>
          <button
            onClick={this.openModal}
            className='get-started'>Get Started</button>
        </div>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Auth Modal"
          animationType={'slide'} >
          <SessionFormContainer />
        </Modal>
      </div>
    );
  }
}

export default withRouter(Navbar);
