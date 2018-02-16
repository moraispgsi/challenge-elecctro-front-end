import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTask } from '../actions/TaskActions'
import TaskList from '../containers/TaskList'

class TaskInput extends Component {

  constructor() {
    super();
    this.state = {
      inputValue: ''
    };
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.addTask(this.state.inputValue);
      //Clearing the input value
      this.setState({
        inputValue: ''
      });
    }
  }

  _handleChange(e) {
    this.setState({inputValue: e.target.value});
  }

  render() {
    return (
      <div>
        <input id="task-input"
               onKeyPress={this._handleKeyPress.bind(this)}
               onChange={this._handleChange.bind(this)}
               value={this.state.inputValue}
               type="text"
               placeholder="Click to add new task"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addTask: (id, text) => dispatch (addTask(id, text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskInput);
