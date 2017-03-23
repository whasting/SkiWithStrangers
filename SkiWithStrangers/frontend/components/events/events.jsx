import React from 'react';
import { hashHistory } from 'react-router';

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

    this.renderEvents = this.renderEvents.bind(this);
  }

  componentWillMount() {
    this.props.receiveEvents();
    if (Array.isArray(this.props.params.id)) {
      this.props.receiveEvent(this.props.params.id[1]);
      let newEvent = this.props.event;
      this.setState({singleEvent: newEvent});
    }
  }

  renderEvents() {
    if (this.props.route.path.length > 12) {
      if (this.props.event) {
        return (
          <div className="event-item">
            {this.props.event.title}
          </div>
        );
      }
    } else if (this.props.events) {
      this.props.events.map((event, idx) => {
        return (
          <div className="event-item" key={idx}>
            {event.title}
          </div>
        );
      });
    }
  }

  render() {
    return (
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
    );
  }
}

export default Events;
