import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import moment from 'moment';
import { selectGuests } from '../../reducers/selectors';
import AttendanceFormContainer from '../events/attendance_form_container';
import EventsContainer from '../events/events_container';
import values from 'lodash/values';

class ResortsDetail extends React.Component {
  constructor(props) {
    super(props);

    this.renderResort = this.renderResort.bind(this);
  }

  componentWillMount() {
    if (this.props.location.pathname !== `/resorts/${this.props.resortId}`){
      hashHistory.replace(`/resorts/${this.props.resortId}`);
    }
    this.props.clearResort(null);
    this.props.receiveResort(this.props.resortId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.resortId !== this.props.resortId) {
      this.props.clearResort(null);
      this.props.receiveResort(newProps.resortId);
    }
  }

  componentWillUnmount() {
    this.props.clearResort(null);
    this.props.clearEvents(null);
  }

  renderResort() {
    if (this.props.resort) {
      return (
        <div className="resort-detail">
          <div className="resort-logo-detail">
            <div className="resort-logo">
              <img
                className={`resort-logo-img`}
                src={this.props.resortLogo} />
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
    if (this.props.resort) {
      return (
        <div className="resorts-detail-wrapper">
          {this.renderResort()}
          <EventsContainer
            resortId={parseInt(this.props.resortId)}
            resortName={this.props.resort.name} />
        </div>
      );
    } else {
      return <div className="resorts-detail-wrapper"></div>;
    }
  }
}

export default withRouter(ResortsDetail);
