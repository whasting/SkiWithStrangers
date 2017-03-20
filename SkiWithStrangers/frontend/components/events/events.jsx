import React from 'react';
import { hashHistory } from 'react-router';

class Events extends React.Component {
  constructor(props) {
    super(props);

    this.renderEvents = this.renderEvents.bind(this);
  }

  componentDidMount() {
    this.props.receiveEvents();
  }

  renderEvents() {
    console.log("TEST");
    if (this.props.events) {
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
        {this.renderEvents}
      </div>
    );
  }
}
