import React from 'react';
import { selectEvents } from '../../reducers/selectors';

class ResortsDetail extends React.Component {
  constructor(props) {
    super(props);

    this.renderResort = this.renderResort.bind(this);
    this.renderEvents = this.renderEvents.bind(this);
  }

  componentDidMount() {
    this.props.receiveResort(this.props.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.id !== this.props.params.id) {
      this.props.receiveResort(newProps.params.id);
    }
  }

  renderResort() {
    if (this.props.resort) {
      return (
        <div className="resort-detail">
          <div className="resort-logo">
            <div className="resortLogoDetail">
              <img
                className={`resortDetailLogoImg`}
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
            <div key={idx} className="event-item">
              <p>{event.title}</p>
              <p>{event.date.slice(0, 10)}</p>
            </div>
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

  render() {
    return (
      <div className="resorts-detail-wrapper">
        {this.renderResort()}
        <div className="resort-events-detail">
          {this.renderEvents()}
        </div>
      </div>
    );
  }
}

export default ResortsDetail;
