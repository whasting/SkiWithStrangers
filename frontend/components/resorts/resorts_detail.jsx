import React from 'react';
import Modal from 'react-modal';
import { Link, hashHistory } from 'react-router';
import { selectEvents } from '../../reducers/selectors';
import moment from 'moment';

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

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday',
              'Friday','Saturday'];

const months = ['January','February','March','April','May','June',
                'July','August','September','October','November','December'];

Date.prototype.getMonthName = function() {
    return months[ this.getMonth() ];
};
Date.prototype.getDayName = function() {
    return days[ this.getDay() ];
};

class ResortsDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      renderEvent: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderResort = this.renderResort.bind(this);
    this.renderEvents = this.renderEvents.bind(this);
    this.renderResortName = this.renderResortName.bind(this);
    this.renderEvent = this.renderEvent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement(document.getElementById('root'));
    if (!this.state.modalOpen && Array.isArray(this.props.params.id)) {
      hashHistory.replace(`/resorts/${this.props.params.id[0]}`);
    }
  }

  componentDidMount() {
    this.props.receiveResort(this.props.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (typeof newProps.params.id === 'string' &&
               newProps.params.id !== this.props.params.id) {

      this.props.receiveResort(newProps.params.id);
    }
  }

  openModal() {
    this.setState({modalOpen: true, renderEvent: true});
  }

  closeModal() {
    hashHistory.replace(`/resorts/${this.props.params.id[0]}`);
    this.setState({modalOpen: false, renderEvent: false});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createAttendance();
  }

  renderResort() {
    if (this.props.resort) {
      return (
        <div className="resort-detail">
          <div className="resort-logo-detail">
            <div className="resort-logo">
              <img
                className={`resort-logo-img`}
                src={this.props.resort.resort_logo_url} />
            </div>
          </div>
          <div className="resort-address">
            <h2>{this.props.resort.address}</h2>
          </div>
          <div className="resort-description">
            <p>{this.props.resort.description}</p>
          </div>
        </div>
      );
    }
  }

  renderEvents() {
    let resortEvents;
    if (this.props.resort) {
      if (this.props.resort.events) {
        resortEvents = selectEvents(this.props.resort);
        resortEvents = resortEvents.map((event, idx) => {
          let date = event.date.slice(0, 10);
          let dayName = moment(date).format("dddd");
          let newDate = moment(date).format("MMM Do YYYY");
          let numGuests = event.guests ? Object.keys(event.guests).length : 0;
          let spotsLeft = event.capacity - numGuests;
          return (
            <Link
              to={`/resorts/${this.props.resort.id}/event/${event.id}`}
              key={idx}
              className="event-item"
              onClick={this.openModal}>
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
      } else {
        resortEvents = (
          <div className="event-item">
            <p>No upcoming events :(</p>
          </div>
        );
      }
    }
    return (
      <div className="resort-events">
        {resortEvents}
      </div>
    );
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

  renderEvent() {
    let resortId = this.props.params.id[1];
    let currentEvent = this.props.resort.events[resortId];
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
            <img className="host-mini" src={currentEvent.host.photo_url}></img>
            <p className="event-host-name">{currentEvent.host.name}</p>
          </div>
        </div>
        <p className="spots-left-detail">{spotsLeft} Spots Left!</p>
        <h1 className="event-join-title">Join Event</h1>
        <form className="event-form" onSubmit={this.handleSubmit}>
          <input className="users-name" placeholder="Your Name"></input>
          <input className="user-email" placeholder="Your email"></input>
        </form>
      </div>
    );
  }

  render() {
    return (
      <div className="resorts-detail-wrapper">
        {this.renderResort()}
        <div className="resort-events-detail">
          <h1 className="event-header">
            {this.renderResortName()}
          </h1>
          {this.renderEvents()}
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Event Modal">
            {this.state.renderEvent ? this.renderEvent() : null}
          </Modal>
        </div>
      </div>
    );
  }
}

export default ResortsDetail;
