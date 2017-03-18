import React from 'react';
import { hashHistory } from 'react-router';

class Resorts extends React.Component {
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
  }

  renderResorts() {
    if (this.props.resorts) {
      return (
        this.props.resorts.map((resort, idx) => (
          <div key={idx} className="resortsSidebarItem">
            <div className="resortLogo">
              <img src={resort.resort_logo_url} />
            </div>
          </div>
        ))
      );
    }
  }

  render() {
    return (
      <aside className="resortsSidebar">
        {this.renderResorts()}
      </aside>
    );
  }
}

export default Resorts;
