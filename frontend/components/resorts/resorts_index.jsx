import React from 'react';
import { Link, hashHistory } from 'react-router';

class ResortsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.renderResorts = this.renderResorts.bind(this);
  }

  componentDidMount() {
    this.props.receiveResorts();
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.currentUser) {
      hashHistory.replace('/');
    }

    if (newProps.resort !== this.props.resort) {
      this.props = newProps;
    }
  }

  renderResorts() {
    if (this.props.resorts) {
      return (
        this.props.resorts.map((resort, idx) => (
          <Link
            key={idx}
            to={`/resorts/${resort.id}`}
            activeClassName="current"
            className="resortSidebarLink">
          <div
            key={resort.id}
            className="resortsSidebarItem">
            <div className={`resortLogo ${resort.id}`}>
              <img
                key={idx}
                className={`resortLogoImg ${resort.id}`}
                src={resort.resort_logo_url} />
            </div>
          </div>
          </Link>
        ))
      );
    }
  }

  render() {
    return (
      <div className="resorts-events">
        <h1 className="resorts-index-header">Resorts</h1>
        <aside className="resortsSidebar">
          {this.renderResorts()}
        </aside>
        {this.props.children}
      </div>
    );
  }
}

export default ResortsIndex;
