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
    minHeight: '57%',
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

    this.previousPath = this.props.location.pathname;

    this.renderEvents = this.renderEvents.bind(this);
    this.renderResortName = this.renderResortName.bind(this);
    this.openEventModal = this.openEventModal.bind(this);
    this.openCreateModal = this.openCreateModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement(document.getElementById('root'));

    if (!this.state.eventModalOpen && Array.isArray(this.props.params.id)) {
      hashHistory.replace(`/resorts/${this.props.params.id[0]}`);
    }
  }

  componentDidMount() {
    this.props.clearEvents(null);
    this.props.receiveEvents(this.props.resortId, this.props.userId);
    this.props.receiveAttendances();
  }

  componentWillUnmount() {
    this.props.clearEvents(null);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.resortId !== newProps.resortId) {
      this.props.clearEvents(null);
      this.previousPath = newProps.location.pathname;
      this.props.receiveEvents(newProps.resortId, this.props.userId);
    }

    if (this.props.events !== newProps.events) {
      this.props = newProps;
    }
  }

  openEventModal() {
    this.setState({eventModalOpen: true});
  }

  openCreateModal() {
    this.setState({createModalOpen: true});
  }

  closeModal() {
    hashHistory.replace(this.previousPath);
    this.setState({eventModalOpen: false, createModalOpen: false, event: {}});
  }

  renderResortName() {
    if (this.props.resortName) {
      return (
        <div className="events-header">
          Events at {this.props.resortName}
        </div>
      );
    } else {
      return (
        <div className="events-header">
          Events You've Signed Up For
        </div>
      );
    }
  }

  renderEvents() {
    let resortEvents;
    if (this.props.events) {
      resortEvents = selectEvents(this.props);

      resortEvents = resortEvents.map((event, idx) => {
        let date = event.date.slice(0, 10);
        let dayName = moment(date).format("dddd");
        let newDate = moment(date).format("MMM Do YYYY");
        let numGuests = 0;

        numGuests =
          event.guests.filter(guest => guest.waitlist === false).length;

        let spotsLeft = event.capacity - numGuests;
        let waitList = spotsLeft ? "" : "-waitlist";



        return (
          <Link
            to={`${this.props.location.pathname}/event/${event.id}`}
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
        );
      });
    }

    if (this.props.location.pathname.slice(0, 10) === '/dashboard') {
      resortEvents.push(
        <Link
          to={`/resorts`}
          key="move-to-resorts"
          className='event-item-join'>
            <h1 className="event-item-title">Join or Create Events!</h1>
        </Link>
      );
    } else {
      resortEvents.push(
        <Link
          to={`resorts/${this.props.resortId}/create-event`}
          key="create-event"
          onClick={this.openCreateModal}
          className='event-item-join'>
          <h1 className="event-item-title">Create Event</h1>
          <img className="plus" src="https://res.cloudinary.com/whasting/image/upload/v1493418928/add_vftw9b.png"></img>
        </Link>
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
      passEvent = this.props.events[this.props.params.id];
    }

    return (
      <div className="resort-events-detail">
          <h1 className="event-header">
            {this.renderResortName()}
          </h1>
          <div className="resort-events-container">
          <Modal
            isOpen={this.state.createModalOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Event Modal">
            <HostFormContainer
              resortId={this.props.resortId}
              userId={this.props.userId}
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
              resort={this.props.resort}
              resortId={this.props.resortId}
              userId={this.props.userId}
              closeModal={this.closeModal}
              openCreateModal={this.openCreateModal} />
          </Modal>
        </div>
      </div>
    );
  }
}

export default withRouter(Events);
