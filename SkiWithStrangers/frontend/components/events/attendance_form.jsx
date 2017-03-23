import React from 'react';
import { hashHistory, withRouter } from 'react-router';
import { selectGuests } from '../../reducers/selectors';

class AttendanceForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: parseInt(this.props.currentUser.id),
      event_id: parseInt(this.props.currentEvent.id)
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderGuestList = this.renderGuestList.bind(this);
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createAttendance(this.state)
      .then(this.setState(this.state));
  }

  renderGuestList(currentEvent) {
    if (currentEvent.guests) {
      let guestList = selectGuests(currentEvent);
      return (
        guestList.map((guest, idx) => (
          <li key={idx} className="event-guest">
            {guest.username}
          </li>
        ))
      );
    }
  }

  render() {
    return (
      <div className="guests-and-form">
        <ul className="guest-list">
          <h1 className="event-guests-title">Guests</h1>
          {this.renderGuestList(this.props.currentEvent)}
        </ul>
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
      </div>
    );
  }
}

export default withRouter(AttendanceForm);
