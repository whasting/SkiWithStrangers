import React from 'react';
import Modal from 'react-modal';
import { Link, hashHistory } from 'react-router';
import { selectEvents } from '../../reducers/selectors';

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

class ResortsDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      renderChild: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderResort = this.renderResort.bind(this);
    this.renderEvents = this.renderEvents.bind(this);
    this.renderResortName = this.renderResortName.bind(this);
    this.renderEvent = this.renderEvent.bind(this);
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
    this.setState({modalOpen: true, renderChild: true});
  }

  closeModal() {
    hashHistory.replace(`/resorts/${this.props.params.id[0]}`);
    console.log(this.props);
    this.setState({modalOpen: false, renderChild: false});
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
        resortEvents =
          resortEvents.map((event, idx) => (
            <Link
              to={`/resorts/${this.props.resort.id}/event/${event.id}`}
              key={idx}
              className="event-item"
              onClick={this.openModal}>
              <p>{event.title}</p>
              <p>Host: {event.host.name}</p>
              <p>{event.date.slice(0, 10)}</p>
            </Link>
          ));
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
            {this.state.renderChild ? this.props.children : null}
          </Modal>
        </div>
      </div>
    );
  }
}

export default ResortsDetail;
