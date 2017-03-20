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
    if (this.props.resort) {
      if (this.props.resort.events) {
        let resortEvents = selectEvents(this.props.resort);
        // console.log(resortEvents);
        return (
          <div className="resort-events">
            {
              resortEvents.map((event, idx) => (
              <p key={idx}>{event.title}</p>
              ))
            }
          </div>
        );
      }
    }
  }

  render() {
    return (
      <div className="resorts-detail-wrapper">
        {this.renderResort()}
        {this.renderEvents()}
      </div>
    );
  }
}

export default ResortsDetail;
