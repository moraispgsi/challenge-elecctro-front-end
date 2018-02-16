import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TaskInput from '../components/TaskInput'
import TaskList from '../containers/TaskList'

class TaskContainer extends Component {

  render() {
    return (
      <div id="main-task-container">
        <div id="task-input-container">
          <TaskInput />
        </div>
        <div id="task-list-container">
          <TaskList />
        </div>
      </div>
      );
  }
}


const mapStateToProps = (state) => ({
  tasks: state.tasks
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);
