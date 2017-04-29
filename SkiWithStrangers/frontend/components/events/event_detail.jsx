import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import { selectEvents } from '../../reducers/selectors';
import moment from 'moment';
import AttendanceFormContainer from '../events/attendance_form_container';
import { selectGuests } from '../../reducers/selectors';

class EventDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      event: this.props.event,
      attendances: this.props.attendances
    };

    this.renderEvent = this.renderEvent.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentWillMount() {
    if (Array.isArray(this.props.params.id)) {
      this.props.receiveEvent(this.props.params.id[1]);
    } else {
      this.props.receiveEvent(this.props.params.id);
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.event !== newProps.event) {
      this.setState({event: newProps.event});
    }

    if(this.state.attendances !== newProps.attendances) {
      this.setState({attendances: newProps.attendances});
      this.props = newProps;
    }
  }

  componentWillUnmount() {
    this.props.clearEvent({});
  }

  handleDelete(e) {
    e.preventDefault();

    let userId = this.props.userId;
    let resortId = this.props.resortId;

    this.props.deleteEvent(this.props.event.id)
      .then(() => this.props.receiveEvents(resortId, userId))
      .then(() => this.props.closeModal());
  }

  handleUpdate(e) {
    e.preventDefault();


  }

  renderEvent(currentEvent) {
    if (currentEvent) {
      let date = currentEvent.date.slice(0, 10);
      let dayName = moment(date).format("dddd");
      let newDate = moment(date).format("MMMM Do YYYY");
      let numGuests = 0;

      if (currentEvent.guests) {
        let guests = currentEvent.guests;
        numGuests =
          guests.filter(guest => guest.waitlist === false).length;
      }

      let spotsLeft = currentEvent.capacity - numGuests;

      let guestOrHost = "";

      if (currentEvent.host_id === this.props.currentUser.id) {
        guestOrHost = (
          <div className="event-form-wrapper">
            <h1 className="joined-message">This is Your Event</h1>
            <button
              onClick={this.handleUpdate}
              className="update-event-button">Update</button>
            <p>-or-</p>
            <button
              onClick={this.handleDelete}
              className="delete-event-button">Delete</button>
          </div>
        );
      } else {
        guestOrHost = (
          <AttendanceFormContainer
            event={currentEvent}
            fetchNewGuests={this.fetchNewGuests}
            resortId={this.props.resortId}
            userId={this.props.userId}
            closeModal={this.props.closeModal} />
        );
      }

      return (
        <div className="event-sign-up">
          <p className="event-detail-title">{currentEvent.title}</p>
          <div className="event-detail-host">
            <div className="date">
              <p className="event-detail-date">{dayName} {newDate}</p>
              <p className="event-body">{currentEvent.body}</p>
            </div>
            <div className="detail-host-info">
              <p className="event-host-name">{currentEvent.host.name}</p>
              <img className="host-mini" src={currentEvent.host.photo_url}></img>
            </div>
          </div>
          <p className="spots-left-detail">{spotsLeft} Spots Left!</p>
          <div className="guests-and-form">
            {guestOrHost}
          </div>
        </div>
      );
    } else {
      return (
        <div className="event-sign-up">
        </div>
      );
    }
  }

  render() {
    return (
      this.renderEvent(this.props.event)
    );
  }
}

export default withRouter(EventDetail);
