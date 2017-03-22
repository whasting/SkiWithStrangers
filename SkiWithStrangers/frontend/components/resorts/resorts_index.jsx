import React from 'react';
import { Link, hashHistory } from 'react-router';

class ResortsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resortsDropdown: "active"
    };

    this.renderResorts = this.renderResorts.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(e) {
    if (e.target.className === `resorts-header-${this.state.resortsDropdown}`) {
      if (this.state.resortsDropdown === "active") {
        $('.resorts-list-item').css('visibility', 'hidden');
        $('.resorts-list-item-active').css('visibility', 'hidden');
        this.setState({resortsDropdown: 'inactive'});
      } else {
        $('.resorts-list-item').css('visibility', 'visible');
        $('.resorts-list-item-active').css('visibility', 'visible');
        this.setState({resortsDropdown: 'active'});
      }
    }
  }

  renderResorts() {
    let activeClassName;
    let resortTag;
    let disabled = "";
    if (this.props.resorts) {
      return (
        this.props.resorts.map((resort, idx) => {
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

  render() {
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
        {this.props.children}
      </div>
    );
  }
}

export default ResortsIndex;
