import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import moment from 'moment';
import Modal from 'react-modal';
import EventDetailContainer from '../events/event_detail_container';

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

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };

    this.renderEvents = this.renderEvents.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement(document.getElementById('root'));
    this.props.receiveEvents();
    this.props.receiveAttendances();
    if (!this.state.modalOpen && this.props.params.id) {
      hashHistory.replace(`/dashboard`);
    }
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.currentUser) {
      hashHistory.replace('/');
    }

    if (this.props.attendances !== newProps.attendances) {
      
    }
  }

  openModal() {
    this.setState({modalOpen: true});
  }

  closeModal() {
    hashHistory.replace(`/dashboard`);
    this.setState({modalOpen: false, event: {}});
  }

  renderEvents() {
    let eventList = [];
    let newEvents = this.props.events;
    let currentUserId = this.props.currentUser.id;

    newEvents = newEvents.filter((userEvent) => {
      return (
        userEvent.guests &&
        Object.keys(userEvent.guests).includes(currentUserId.toString())
      );
    });

    if (this.props.events) {
      eventList = newEvents.map((userEvent, idx) => {
        let date = userEvent.date.slice(0, 10);
        let dayName = moment(date).format("dddd");
        let newDate = moment(date).format("MMM Do YYYY");
        let numGuests = 0;

        for (let attendanceId in this.props.attendances) {
          if (this.props.attendances[attendanceId].event_id === userEvent.id &&
              this.props.attendances[attendanceId].waitlist === false) {
            numGuests = numGuests + 1;
          }
        }

        let spotsLeft = userEvent.capacity - numGuests;
        let waitList = spotsLeft ? "" : "-waitlist";

        //link route to just /event/:id X
        //figure out if waitlisted X
        //need to setup modal
        //calculate spots left X

        return (
          <Link
            to={`/dashboard/event/${userEvent.id}`}
            key={idx}
            className={`event-item${waitList} ${userEvent.id}`}
            onClick={this.openModal}>
            <div className="event-item-host">
              <div className="date">
                <p className="event-item-day-name">{dayName}</p>
                <p className="event-item-date">{newDate}</p>
              </div>
              <div className="host-info">
                <img className="host-mini" src={userEvent.host.photo_url}></img>
                <p className="event-item-host-name">{userEvent.host.name}</p>
              </div>
            </div>
            <p className="event-item-title">{userEvent.title}</p>
            <p className="spots-left">{spotsLeft} Spots Left!</p>
          </Link>
        );
      });
    }

    return eventList;
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="dashboard-container">
          <div className="dashboard-events-detail">
            <h1 className="dashboard-events-title">
              Events You've Signed Up For
            </h1>
            {this.renderEvents()}
            <Modal
              isOpen={this.state.modalOpen}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Event Modal">
              <EventDetailContainer
                event={this.props.event}
                resort={this.props.resort} />
            </Modal>
            <Link
              to={`/resorts`}
              className='event-item-join'>
                <h1 className="event-item-title">Join an Event!</h1>
            </Link>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default withRouter(Dashboard);
