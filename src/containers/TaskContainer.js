import React, { Component } from 'react'
import TaskInput from '../components/TaskInput'
import TaskList from '../containers/TaskList'
import settingIcon from '../settings.png'
import Settings from '../components/Settings'

export default class TaskContainer extends Component {

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
