import React from 'react';

class ResortsDetail extends React.Component {
  constructor(props) {
    super(props);

    this.renderResort = this.renderResort.bind(this);
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
        <h2 className="resortName">
          {this.props.resort.name}
        </h2> );
    }
  }

  render() {
    return (
      <div className="resorts-detail">
        {this.renderResort()}
      </div>
    );
  }
}

export default ResortsDetail;
