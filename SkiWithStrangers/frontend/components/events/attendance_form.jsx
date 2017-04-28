import React from 'react';
import { hashHistory, withRouter } from 'react-router';
import { selectAttendances } from '../../reducers/selectors';

class AttendanceForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: parseInt(this.props.currentUser.id),
      event_id: parseInt(this.props.event.id),
      waitlist: false,
      joined: false,
      reRender: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleWaitlistSubmit = this.handleWaitlistSubmit.bind(this);
    this.handleRemoveAttendance = this.handleRemoveAttendance.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderWaitlistForm = this.renderWaitlistForm.bind(this);
    this.renderJoinForm = this.renderJoinForm.bind(this);
    this.renderJoinedMessage = this.renderJoinedMessage.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if ((this.props.guests !== newProps.guests) ||
        (this.props.attendance !== newProps.attendance)) {
      this.props = newProps;
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let userId = this.state.user_id;
    let eventId = this.state.event_id;
    let waitListed = this.state.waitlist;
    this.props.createAttendance({
      user_id: userId,
      event_id: eventId,
      waitlist: waitListed})
      .then(() => this.props.receiveEvents(this.props.event.resort_id));
  }

  handleWaitlistSubmit(e) {
    e.preventDefault();

    let userId = this.state.user_id;
    let eventId = this.state.event_id;
    let waitListed = true;

    this.props.createAttendance({
      user_id: userId,
      event_id: eventId,
      waitlist: waitListed}
    );

    this.setState({waitlist: true, joined: true});
  }

  handleRemoveAttendance(e) {
    e.preventDefault();

    if (this.props.location.pathname !== `/dashboard/event/${this.props.event.id}`) {
      this.props
      .deleteAttendance(this.props.currentUser.id, this.props.event.id)
      .then(() => (
        this.props.receiveEvents(this.props.resortId, this.props.userId)))
      .then(events => events);
    } else {
      this.props
      .deleteAttendance(this.props.currentUser.id, this.props.event.id)
      .then(() => (
        this.props.receiveEvents(this.props.resortId, this.props.userId)))
      .then(() => this.props.closeModal());
    }
  }

  renderForm() {
    let currentUserAttending = this.props.guestJoin;
    let currentUserWaitlisted = false;

    this.props.event.guests.forEach(guest => {
      if (guest.user_id === this.props.currentUser.id) {
        currentUserAttending = true;
        currentUserWaitlisted = guest.waitlist;
      }
    });

    if (currentUserAttending) {
      return this.renderJoinedMessage(currentUserWaitlisted);
    } else {

      let numGuests = 0;
      if (this.props.event.guests) {
        let guests = this.props.event.guests;
        numGuests =
          guests.filter(guest => guest.waitlist === false).length;
      }

      let availableSpots = this.props.event.capacity - numGuests;

      if (availableSpots === 0) {
        return this.renderWaitlistForm();
      } else {
        return this.renderJoinForm();
      }
    }
  }

  renderWaitlistForm() {
    return (
      <form className="event-form" onSubmit={this.handleWaitlistSubmit}>
        <h1 className="event-join-title">Join Waitlist</h1>
        <input className="users-name" placeholder="Your Name"></input>
        <input className="user-email" placeholder="Your Email"></input>
        <input
          className="user-phone"
          placeholder="Your Phone Number (optional)">
        </input>
        <button className="event-waitlist-button">Join Waitlist!</button>
      </form>
    );
  }

  renderJoinForm() {
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

  renderJoinedMessage(waitlisted) {
    let title;
    if (waitlisted) {
      title = <h1 className="waitlist-message">You Are On the Waitlist!</h1>;
    } else {
      title = <h1 className="joined-message">You Have Joined This Event!</h1>;
    }

    return (
      <div className="join-message">
        {title}
        <button
          className="remove-attendance"
          onClick={this.handleRemoveAttendance}>
          Leave Event
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="event-form-wrapper">
        {this.renderForm()}
      </div>
    );
  }
}

export default withRouter(AttendanceForm);
