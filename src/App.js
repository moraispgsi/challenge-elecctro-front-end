import React, {Component} from 'react';
import TaskContainer from './containers/TaskContainer'
import './App.css';

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <TaskContainer />
    );
  }
}

export default App;
