import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeTask, editTask, markTask, unmarkTask } from '../actions/TaskActions'
import ascendingIcon from '../ascending.svg'
import descendingIcon from '../descending.svg'


class Settings extends Component {

  constructor(props) {
    super(props);
  }

  _handleClick() {
    //todo
  }

  render() {
    return (
      <div id="settings">
        <div id="settings-sort-container"  className="settings-item">
          <span id="settings-sort-text">
            Sort
          </span>
          <img id="settings-sort-icon" src={ascendingIcon} />
        </div>
        <div id="settings-show-marked-container" className="settings-item">
          <span id="settings-show-marked-text">
            Show Marked
          </span>
          <label className="checkbox-container">
            <input className="checkbox"
                   type="checkbox"
                   checked={this.props.marked}
                   onClick={this._handleClick.bind(this)}/>
            <span className="checkbox-checkmark"/>
          </label>
        </div>
      </div>
    )
  }
}

Settings.propTypes = {

};

//Mapping the dispatcher to prop functions(actions)
const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(null, mapDispatchToProps)(Settings);
