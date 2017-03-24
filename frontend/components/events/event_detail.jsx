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

  renderEvent(currentEvent) {

    let date = currentEvent.date.slice(0, 10);
    let dayName = moment(date).format("dddd");
    let newDate = moment(date).format("MMMM Do YYYY");
    let numGuests = 0;

    if (this.state.attendances) {
      for (let attendanceId in this.state.attendances) {
        if(currentEvent.id === this.state.attendances[attendanceId].event_id &&
           this.state.attendances[attendanceId].waitlist === false) {
          numGuests = numGuests + 1;
        }
      }
    }

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

  render() {
    return (
      this.renderEvent(this.props.event)
    );
  }
}

export default withRouter(EventDetail);
