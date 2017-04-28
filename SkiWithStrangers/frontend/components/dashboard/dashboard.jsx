import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import EventsContainer from '../events/events_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.location.pathname !== `/dashboard`){
      hashHistory.replace(`/dashboard`);
    }
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.currentUser) {
      hashHistory.replace('/');
    }
  }

  render() {
    let passEvent;
    if (this.props.params.id) {
      passEvent = this.props.events[this.props.params.id];
    } else {
      passEvent = "";
    }

    //   <Link
    //     to={`/resorts`}
    //     className='event-item-join'>
    //       <h1 className="event-item-title">Join an Event!</h1>
    //   </Link>

    if (this.props.currentUser) {
      return (
        <div className="dashboard-container">
          <EventsContainer
            userId={parseInt(this.props.currentUser.id)} />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default withRouter(Dashboard);
