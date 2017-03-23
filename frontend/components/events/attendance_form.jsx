import React from 'react';
import { hashHistory, withRouter } from 'react-router';

class AttendanceForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: parseInt(this.props.currentUser.id),
      event_id: parseInt(this.props.event.id)
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.event !== newProps.event) {

    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createAttendance(this.state);
  }

  renderForm() {

  }

  render() {
    console.log(this.props.guests);
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
