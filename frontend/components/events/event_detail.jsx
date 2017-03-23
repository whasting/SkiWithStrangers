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
      event: this.props.event
    };

    this.renderEvent = this.renderEvent.bind(this);
    this.renderGuestList = this.renderGuestList.bind(this);
    this.fetchNewGuests = this.fetchNewGuests.bind(this);
  }

  componentWillMount() {
    this.props.receiveEvent(this.props.params.id[1]);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.event !== newProps.event) {
      this.setState({event: newProps.event});
    }
  }

  componentWillUnmount() {
    this.props.clearEvent({});
  }

  renderEvent(currentEvent) {
    let resortId;

    let date = currentEvent.date.slice(0, 10);
    let dayName = moment(date).format("dddd");
    let newDate = moment(date).format("MMMM Do YYYY");
    let numGuests = currentEvent.guests ? Object.keys(currentEvent.guests).length : 0;
    let spotsLeft = currentEvent.capacity - numGuests;

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
          <AttendanceFormContainer
            event={currentEvent}
            fetchNewGuests={this.fetchNewGuests} />
        </div>
      </div>
    );
  }

  renderGuestList(currentEvent) {
    if (currentEvent && currentEvent.guests) {
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

  fetchNewGuests() {
    this.props.receiveEvent(this.state.event[0].id);
  }

  render() {
    if (this.props.event.length > 0) {
    return (
      this.renderEvent(this.props.event[0])
    );
  } else {
    return (<div></div>);
  }
  }
}

export default withRouter(EventDetail);
