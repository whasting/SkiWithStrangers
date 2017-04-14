import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class HostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      date: "",
      capacity: "",
      host_id: parseInt(this.props.currentUser.id),
      resort_id: this.props.resortId
    };

    this.renderForm = this.renderForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createEvent(this.state)
      .then(() => hashHistory.replace(`/resorts/${this.props.resort.id}`));
    this.props.receiveEvents();
    this.props.closeModal();
  }

  renderForm() {
    return (
      <form className="host-form" onSubmit={this.handleSubmit}>
        <h1 className="event-join-title">Create Event</h1>
        <input
          className="title"
          onChange={this.update("title")}
          placeholder="Event Title"></input>
        <textarea
          className="description"
          rows="4"
          cols="10"
          onChange={this.update("body")}
          placeholder="Description"></textarea>
        <input
          type="date"
          className="date"
          onChange={this.update("date")}
          placeholder="Date">
        </input>
        <input
          className="capacity"
          onChange={this.update("capacity")}
          placeholder="Number of Guests">
        </input>
        <button className="event-button">Create Event!</button>
      </form>
    );
  }

  render() {
    return(
      <div className="create-event-container">{this.renderForm()}</div>
    );
  }
}

export default withRouter(HostForm);
