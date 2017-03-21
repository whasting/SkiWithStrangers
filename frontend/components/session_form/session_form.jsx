import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
    padding: '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    backgroundColor: 'transparent',
    overflow: 'visible'
  }
};

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      password2: "",
      modalOpen: false,
      animationType: 'none'
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.tabSwitch = this.tabSwitch.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.renderNav = this.renderNav.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement(document.getElementById('root'));
  }

  componentWillReceiveProps(newProps) {
    this.props = newProps;
    this.redirectIfLoggedIn();
	}

  openModal() {
    this.setState({modalOpen: true});
  }

  closeModal() {
    this.setState({modalOpen: false});
  }

  // setAnimationType(type) {
  //   this.setState({animationType: type});
  // }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

	redirectIfLoggedIn() {
    if (this.props.loggedIn) {
			this.props.router.push("/resorts");
		}
  }

  handleChange(event) {
    event.preventDefault();
    if (event.target.placeholder === 'Username') {
      this.setState({username: event.target.value});
    } else if (event.target.placeholder === 'Password') {
      this.setState({password: event.target.value});
    } else if (event.target.placeholder === 'Re-enter Password') {
      this.setState({password2: event.target.value});
    }
  }

  handleDemo(e) {
    e.target.disabled = "disabled";

    if (this.props.formType === 'signup') {
      this.props.router.push('/login');
    }

    const demoUsername = ['d', 'e', 'm', 'o', '_', 'u', 's', 'e', 'r'];
    const demoPassword = ['p', 'a', 's', 's', 'w', 'o', 'r', 'd','p',
                          'a', 's', 's', 'w', 'o', 'r', 'd'];
    let usernameFill = "";
    let passwordFill = "";
    let i = 0;

    let userFill = setInterval(() => {
      usernameFill += demoUsername[i];
      i++;
      this.setState({username: usernameFill});

      if (demoUsername.length === i) {
        clearInterval(userFill);
        i = 0;

        let passFill = setInterval(() => {
          passwordFill += demoPassword[i];
          i++;
          this.setState({password: passwordFill});

          if (demoPassword.length === i) {
            const user = this.state;
            setTimeout(() => this.props.processForm(user), 120);
            clearInterval(passFill);
          }
        }, 50);
      }
    }, 75);
  }

  handleSignup(e) {
    e.preventDefault();
    this.props.clearErrors();
    if (this.state.password === this.state.password2) {
      const user = this.state;
      this.props.processForm(user);
    } else {
      this.props.receiveErrors(["Passwords Don't Match"]);
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

  tabSwitch(e) {
    if (this.props.formType === 'login' &&
        e.target.className.includes('not-active')) {
      this.clearPasswordAndErrors();
      return this.props.router.push('/signup');
    } else if (this.props.formType === 'signup' &&
               e.target.className.includes('not-active')) {
      this.clearPasswordAndErrors();
      return this.props.router.push('/login');
    }
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
        <div
          className={`tab1 ${loginTab}`}
          onClick={this.tabSwitch}>
          <Link
            to="/login"
            className={loginTab}>Login</Link>
        </div>
        <div
          className={`tab2 ${signupTab}`}
          onClick={this.tabSwitch}>
          <Link
            to="/signup"
            className={signupTab}>Signup</Link>
        </div>
      </header>
    );
  }

  clearPasswordAndErrors() {
    if (this.props.formType === 'signup') {
      this.setState({password: "", password2: ""});
    } else {
      this.setState({password: ""});
    }
    this.props.clearErrors();
  }

  renderForm() {
    if (this.props.formType === 'signup') {
      return (
        <div className="login-signup">
          <div className="input-fields">
            <div className="text-inputs">
              <div className="username-container">
                <input
                  type="text"
                  className="signup-username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  placeholder="Username" />
              </div>
              <div className="password-container">
                <input
                  type="password"
                  className="signup-password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  placeholder="Password" />
                <input
                  type="password"
                  className="signup-password2"
                  onChange={this.handleChange}
                  value={this.state.password2}
                  placeholder="Re-enter Password" />
              </div>
            </div>
            <div className="errors-container">
              <div className="errors">
                {this.renderErrors()}
              </div>
            </div>
            <div className="buttons-signup">
              <input
                type="submit"
                className="sign-up-button"
                onClick={this.handleSignup}
                value="Sign Up" />
              <input
                type="submit"
                className="demo-button"
                onClick={this.handleDemo}
                value="Demo" />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="login-signup">
          <div className="input-fields">
            <div className="text-inputs">
              <div className="username-container">
                <input
                  type="text"
                  className="login-username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  placeholder="Username" />
              </div>
              <div className="password-container">
                <input
                  type="password"
                  className="login-password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  placeholder="Password" />
              </div>
            </div>
            <div className="errors-container">
              <div className="errors">
                {this.renderErrors()}
              </div>
            </div>
            <div className="buttons">
              <input
                type="submit"
                className="log-in-button"
                onClick={this.handleSubmit}
                value="Log In" />
              <input
                type="submit"
                className="demo-button"
              onClick={this.handleDemo}
              value="Demo" />
            </div>
          </div>
        </div>
      );
    }
  }

  renderNav() {
    return (
      <div
        className="nav-buttons-logged-out"
        onClick={this.openModal}>
        <Link
          to="/signup"
          activeClassName="current"
          className="nav-button-logged-out">Sign Up</Link>
        <Link
          to="/login"
          activeClassName="current"
          className="nav-button-logged-out">Log In</Link>
      </div>
    );
  }

  render() {
    let submit;
    if (this.props.formType === 'signup') {
      submit = 'Sign Up';
    } else {
      submit = 'Log In';
    }
    return (
      <div className="auth-wrapper">
        {this.renderNav()}
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
            <div className="auth-form">
              {this.renderTabs()}
              {this.renderForm()}
            </div>
        </Modal>
      </div>
    );
  }
}

export default withRouter(SessionForm);
