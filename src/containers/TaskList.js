import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Task from '../components/Task'

class TaskList extends Component {
  render() {
    console.log('here:', this.props.tasks)
    return (
      <ul id="task-list">
        {this.props.tasks.toJS().map((task) => (
          <Task key={task.id}
                id={task.id}
                text={task.text}
                marked={task.marked}/>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
