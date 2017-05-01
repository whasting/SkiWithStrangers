import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class HostForm extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.event) {
      this.state = {
        id: this.props.event.id,
        title: this.props.event.title,
        body: this.props.event.body,
        date: this.props.event.date,
        capacity: this.props.event.capacity,
        host_id: parseInt(this.props.currentUser.id),
        resort_id: this.props.event.resort_id
      };
    } else {
      this.state = {
        title: "",
        body: "",
        date: "",
        capacity: "",
        host_id: parseInt(this.props.currentUser.id),
        resort_id: this.props.resortId
      };
    }

    this.renderForm = this.renderForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    let resortId = this.props.resortId;
    let userId = this.props.userId;

    if (this.props.update) {
      this.props.updateEvent(this.state)
      .then(() => this.props.receiveEvents(resortId, userId))
      .then(() => this.props.closeModal());
    } else {
      this.props.createEvent(this.state)
        .then(() => this.props.receiveEvents(resortId, userId))
        .then(() => this.props.closeModal());
    }
  }

  renderForm() {
    let date = this.state.date;
    if (date) {
      date = date.slice(0, 10);
    }

    let title = "Create Event";
    let button = (
      <button className="event-button">Create Event!</button>
    );

    if (this.props.update) {
      title = "Update Event";
      button = (
        <button
          onClick={this.handleUpdate}
          className="update-event-button">Update</button>
      );
    }

    return (
      <form className="host-form" onSubmit={this.handleSubmit}>
        <h1 className="event-join-title">{title}</h1>
        <input
          className="title"
          onChange={this.update("title")}
          value={this.state.title}
          placeholder="Event Title"></input>
        <textarea
          className="description"
          rows="4"
          cols="10"
          value={this.state.body}
          onChange={this.update("body")}
          placeholder="Description"></textarea>
        <input
          type="date"
          className="date"
          value={date}
          onChange={this.update("date")}
          placeholder="Date">
        </input>
        <input
          className="capacity"
          onChange={this.update("capacity")}
          value={this.state.capacity}
          placeholder="Number of Guests">
        </input>
        {button}
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
