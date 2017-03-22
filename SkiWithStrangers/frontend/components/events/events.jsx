import React from 'react';
import { hashHistory } from 'react-router';

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
      <div className="events-wrapper">
        {this.renderEvents()}
      </div>
    );
  }
}

export default Events;
