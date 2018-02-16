import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { editTask, markTask, unmarkTask } from '../actions/TaskActions'

class Task extends Component {

  _handleClick() {
    this.props.marked ?
      this.props.unmarkTask(this.props.id) : this.props.markTask(this.props.id);
  }

  render() {
    console.log(this.props.text);


    return (
      <li
        className="task"
        style={{
          textDecoration: this.props.marked ? 'line-through' : 'none'
        }}
      >
        <label className="container">
          <input className="checkbox" type="checkbox" checked={this.props.marked} onClick={this._handleClick.bind(this)}/>
          <span className="checkmark"></span>
        </label>
        <span className="task-text">
        {this.props.text}
        </span>
      </li>
    )
  }
}

Task.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  marked: PropTypes.bool
};

//Mapping the dispatcher to prop functions(actions)
const mapDispatchToProps = (dispatch, ownProps) => ({
    editTask: (id, text) => dispatch (editTask(id, text)),
    markTask: (id) => dispatch (markTask(id)),
    unmarkTask: (id) => dispatch (unmarkTask(id))
});

export default connect(null, mapDispatchToProps)(Task);
