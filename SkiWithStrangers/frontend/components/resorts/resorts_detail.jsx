import React from 'react';
import { Link, hashHistory } from 'react-router';
import moment from 'moment';
import { selectGuests } from '../../reducers/selectors';
import AttendanceFormContainer from '../events/attendance_form_container';
import EventsContainer from '../events/events_container';

class ResortsDetail extends React.Component {
  constructor(props) {
    super(props);

    this.renderResort = this.renderResort.bind(this);
  }

  componentWillMount() {

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

  render() {
    return (
      <div className="resorts-detail-wrapper">
        {this.renderResort()}
        <EventsContainer resort={this.props.resort} />
      </div>
    );
  }
}

export default ResortsDetail;
