import React from "react"
import PropTypes from "prop-types"

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskStatus: 'backlog'};

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(taskStatus) {
    this.setState({taskStatus: taskStatus});
  }

  render () {
    return (
      <div>
        <Task
          taskStatus={this.state.taskStatus}
          onTaskStatusChange={this.handleChange}
        />
        <Status
          taskStatus={this.state.taskStatus}
        />
      </div>
    );
  }
}

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'backlog'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onTaskStatusChange(event.target.value);
  }

  render () {
    return (
        <div>
          Choose Status:
          <select value={this.state.taskStatus} onChange={this.handleChange}>
            <option value="backlog">Backlog</option>
            <option value="working">Working</option>
            <option value="review">Review</option>
            <option value="finish">Finish</option>
          </select>
        </div>
    );
  }
}

class Status extends React.Component {
  render() {
    const taskStatus = this.props.taskStatus;
    console.log(taskStatus);
    return (
      <div>
        <div className="oneline">
          <Backlog taskStatus={taskStatus}/>
        </div>
        <div className="oneline">
          <Working taskStatus={taskStatus}/>
        </div>
        <div className="oneline">
          <Review taskStatus={taskStatus}/>
        </div>
        <div className="oneline">
          <Finish taskStatus={taskStatus}/>
        </div>
      </div>
    );
  }
}

class Backlog extends React.Component {
  render() {

    const data = this.props.taskStatus == "backlog" ?
      <div>I'm task</div> :
      "";

    return (
      <div>
        Backlog
        {data}
      </div>
    );
  }
}

class Working extends React.Component {
  render() {

    const data = this.props.taskStatus == "working" ?
      <div>I'm task</div> :
      "";

    return (
      <div>
        Working
        {data}
      </div>
    );
  }
}

class Review extends React.Component {
  render() {

    const data = this.props.taskStatus == "review" ?
      <div>I'm task</div> :
      "";

    return (
      <div>
        Review
        {data}
      </div>
    );
  }
}

class Finish extends React.Component {
  render() {

    const data = this.props.taskStatus == "finish" ?
      <div>I'm task</div> :
      "";

    return (
      <div>
        Finish
        {data}
      </div>
    );
  }
}

export default Board
