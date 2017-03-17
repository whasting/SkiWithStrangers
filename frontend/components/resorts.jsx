import React from 'react';
import { hashHistory } from 'react-router';

class Resort extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.currentUser) {
      hashHistory.replace('/');
    }
  }

  render() {
    return (
      <h1>RESORTS</h1>
    );
  }
}

export default Resort;
