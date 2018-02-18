import React, { Component } from 'react';
import TaskContainer from './containers/TaskContainer'
import './css/App.css';
import logo from './img/logo.png'
import { hideSettings } from "./actions/SettingsActions";
import { connect } from 'react-redux'

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div onClick={(e) => this.props.hideSettings()}>
        <img id="logo" src={logo} />
        <TaskContainer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideSettings: () => dispatch (hideSettings())
});

export default connect(null, mapDispatchToProps)(App);
