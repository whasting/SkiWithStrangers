import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import { selectEvents } from '../../reducers/selectors';
import moment from 'moment';
import Modal from 'react-modal';
import EventDetailContainer from './event_detail_container';
import HostFormContainer from '../host_form/host_form_container';

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

class Events extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventModalOpen: false,
      createModalOpen: false,
      event: this.props.event,
      attendances: this.props.attendances
    };

    this.renderEvents = this.renderEvents.bind(this);
    this.renderResortName = this.renderResortName.bind(this);
    this.openEventModal = this.openEventModal.bind(this);
    this.openCreateModal = this.openCreateModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement(document.getElementById('root'));
    this.props.receiveEvents();
    this.props.receiveAttendances();
    if (!this.state.eventModalOpen && Array.isArray(this.props.params.id)) {
      hashHistory.replace(`/resorts/${this.props.params.id[0]}`);
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.attendances !== newProps.attendances) {
      this.props = newProps;
      this.setState({attendances: this.props.attendances});
    }
  }

  openEventModal() {
    this.setState({eventModalOpen: true});
  }

  openCreateModal() {
    this.setState({createModalOpen: true});
  }

  closeModal() {
    hashHistory.replace(`/resorts/${this.props.params.id[0]}`);
    this.setState({eventModalOpen: false, createModalOpen: false, event: {}});
  }

  renderResortName() {
    if (this.props.resort) {
      return (
        <div className="events-header">
          Events at {this.props.resort.name}
        </div>
      );
    }
  }

  renderEvents() {
    let resortEvents;
    if (this.props.resort && this.props.events) {

      resortEvents = selectEvents(this.props);

      resortEvents = resortEvents.map((event, idx) => {
        let date = event.date.slice(0, 10);
        let dayName = moment(date).format("dddd");
        let newDate = moment(date).format("MMM Do YYYY");
        let numGuests = 0;

        if (this.state.attendances) {
          for (let attendanceId in this.state.attendances) {
            if(event.id === this.state.attendances[attendanceId].event_id &&
               this.state.attendances[attendanceId].waitlist === false) {
              numGuests = numGuests + 1;
            }
          }
        }

        let spotsLeft = event.capacity - numGuests;
        let waitList = spotsLeft ? "" : "-waitlist";

        if (this.props.resort.id === event.resort_id) {
          return (
          <Link
            to={`/resorts/${this.props.resort.id}/event/${event.id}`}
            key={idx}
            className={`event-item${waitList} ${event.id}`}
            onClick={this.openEventModal}>
            <div className="event-item-host">
              <div className="date">
                <p className="event-item-day-name">{dayName}</p>
                <p className="event-item-date">{newDate}</p>
              </div>
              <div className="host-info">
                <img className="host-mini" src={event.host.photo_url}></img>
                <p className="event-item-host-name">{event.host.name}</p>
              </div>
            </div>
            <p className="event-item-title">{event.title}</p>
            <p className="spots-left">{spotsLeft} Spots Left!</p>
          </Link>
        );}
      });
    }

    if (resortEvents) {
      resortEvents = resortEvents.filter((event) => event);
    }

    if (resortEvents && resortEvents.length === 0) {
      resortEvents = (
        <div className="event-item">
          <p>No upcoming events :(</p>
        </div>
      );
    }
    return (
      <div className="resort-events">
        {resortEvents}
      </div>
    );
  }

  render() {

    let passEvent;
    if (Array.isArray(this.props.params.id)) {
      passEvent = this.props.events[this.props.params.id[1]];
    } else {
      passEvent = "";
    }

    let eventButton = "";
    if (this.props.resort) {
      eventButton = (
        <Link
          to={`resorts/${this.props.resort.id}/create-event`}
          onClick={this.openCreateModal}
          className="create-event-button">
          <h1>Create Event</h1>
        </Link>
      );
    }


    return (
      <div className="resort-events-detail">
        <h1 className="event-header">
          {this.renderResortName()}
        </h1>
        {eventButton}
        <Modal
          isOpen={this.state.createModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Event Modal">
          <HostFormContainer
            resort={this.props.resort}
            closeModal={this.closeModal} />
        </Modal>
        {this.renderEvents()}
        <Modal
          isOpen={this.state.eventModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Event Modal">
          <EventDetailContainer
            event={passEvent}
            resort={this.props.resort} />
        </Modal>
      </div>
    );
  }
}

export default withRouter(Events);
