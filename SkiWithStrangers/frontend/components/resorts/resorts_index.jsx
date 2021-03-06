import React from 'react';
import { Link, hashHistory } from 'react-router';
import ResortsDetailContainer from  './resorts_detail_container';
import { selectAllResorts } from '../../reducers/selectors';

class ResortsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resortsDropdown: "active"
    };

    this.renderResorts = this.renderResorts.bind(this);
    this.renderResortDetail = this.renderResortDetail.bind(this);
  }

  componentWillMount() {
    this.props.receiveResorts();
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.currentUser) {
      hashHistory.replace('/');
    }

    if (newProps.resorts !== this.props.resorts) {
      this.props = newProps;
    }
  }

  renderResorts() {
    let activeClassName;
    let resortTag;
    let disabled = "";
    if (this.props.resorts) {
      let resortsArray = selectAllResorts(this.props);
      return (
        resortsArray.map((resort, idx) => {
          if(parseInt(this.props.params.id) === resort.id) {
            resortTag = (
              <Link
                key={idx}
                to={`/resorts/${resort.id}`}
                activeClassName="current"
                className="resorts-list-link"
                onClick={e => e.preventDefault()}>
                <li
                  key={resort.id}
                  className="resorts-list-item-active"
                  visibility="visible">
                  {resort.name}
                </li>
              </Link>
            );
          } else {
            resortTag = (
              <Link
                key={idx}
                to={`/resorts/${resort.id}`}
                activeClassName="current"
                className="resorts-list-link">
                <li
                  key={resort.id}
                  className="resorts-list-item"
                  visibility="visible">
                  {resort.name}
                </li>
              </Link>
            );
          }
          return resortTag;
        }
      ));
    }
  }

  renderResortDetail() {
    return (
      <div className="resorts-detail-wrapper-landing">
        <div className="resorts-landing">
          <h1 className="event-item-title entry">
            Start by Selecting a Resort.
          </h1>
          <img className="arrow" src="https://res.cloudinary.com/whasting/image/upload/v1493419521/previous_bx1rqr.png"></img>
          <Link
            to={`/dashboard`}
            className='event-item-join'>
              <h1 className="event-item-title">
                Back to the Dashboard.
              </h1>
          </Link>
        </div>
      </div>
    );
  }

  render() {
    let resort = <div></div>;
    let resortId;

    if (this.props.params.id) {
      if (Array.isArray(this.props.params.id)) {
        resortId = this.props.params.id[0];
      } else {
        resortId = this.props.params.id;
      }

      if (this.props.resorts[resortId]) {
        resort = <ResortsDetailContainer
          resortId={resortId}
          wait={0}
          logo={this.props.resorts[resortId].resort_logo_url} />;
      }
    } else {
      resort = this.renderResortDetail();
    }

    return (
      <div className="resorts-events">
        <aside className="resortsSidebar">
          <ul className="resorts-list">
            <h1
              className={`resorts-header-${this.state.resortsDropdown}`}>
              Resorts</h1>
            {this.renderResorts()}
          </ul>
        </aside>
        {resort}
      </div>
    );
  }
}

export default ResortsIndex;
