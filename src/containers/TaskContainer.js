import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TaskInput from '../components/TaskInput'
import TaskList from '../containers/TaskList'
import settingIcon from '../settings.png'
import Settings from '../components/Settings'

class TaskContainer extends Component {

  constructor() {
    super();
    this.state = {
      showSettings: false
    };
  }

  render() {
    return (
      <div id="main-task-container">
        <div id="task-input-container">
          <TaskInput />
          <img id="setting-button"
               src={settingIcon}
               onClick={() => this.setState({showSettings: !this.state.showSettings})} />
          {
            !this.state.showSettings ? null :
              <Settings />
          }
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
