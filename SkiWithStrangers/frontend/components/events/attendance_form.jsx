import React from 'react';
import { withRouter } from 'react-router';

class AttendanceForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: this.props.currentUser.id,
      event_id: this.props.currentEvent.id
    };

    this.renderForm = this.renderForm.bind(this);
  }

  renderForm() {

  }

  render() {
    console.log(this.state);
    return (
      <form className="event-form" onSubmit={this.handleSubmit}>
        <h1 className="event-join-title">Join Event</h1>
        <input className="users-name" placeholder="Your Name"></input>
        <input className="user-email" placeholder="Your Email"></input>
        <input
          className="user-phone"
          placeholder="Your Phone Number (optional)">
        </input>
        <button className="event-button">Join Event!</button>
      </form>
    );
  }
}

export default withRouter(AttendanceForm);
