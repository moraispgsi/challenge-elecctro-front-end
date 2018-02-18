import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showMarked, notShowMarked, sortAscending, sortDescending } from '../actions/SettingsActions'
import * as sortingTypes from '../constants/SortTypes'
import ascendingIcon from '../img/ascending.svg'
import descendingIcon from '../img/descending.svg'

class Settings extends Component {

  _handleSortClick() {
    switch(this.props.sorting) {
      case sortingTypes.ASCENDING:
        this.props.sortDescending();
        break;
      default:
        this.props.sortAscending();
    }
  }

  sortIcon() {
    switch(this.props.sorting) {
      case sortingTypes.ASCENDING:
        return descendingIcon;
      default:
        return ascendingIcon;
    }
  }

  render() {
    return (
      <div id="settings" onClick={(e) => e.stopPropagation()}>
        <div id="settings-sort-container" className="settings-item" onClick={this._handleSortClick.bind(this)}>
          <span id="settings-sort-text">
            Sort
          </span>
          <img id="settings-sort-icon"
               src={this.sortIcon()}
          />
        </div>
        <div id="settings-show-marked-container"
             className="settings-item"
             onClick={() => this.props.showingMarked ? this.props.notShowMarked() : this.props.showMarked()}>
          <span id="settings-show-marked-text">
            Show Marked
          </span>
          <label className="checkbox-container">
            <input className="checkbox"
                   type="checkbox"
                   checked={this.props.showingMarked}
                   />
            <span className="checkbox-checkmark"/>
          </label>
        </div>
      </div>
    )
  }
}

Settings.propTypes = {
  sorting: PropTypes.string,
  showingMarked: PropTypes.bool
};

const mapStateToProps = (state) => ({
  showingSettings: state.settings.get('showingSettings'),
  sorting: state.settings.get('sorting'),
  showingMarked: state.settings.get('showingMarked')
});

//Mapping the dispatcher to prop functions(actions)
const mapDispatchToProps = (dispatch, ownProps) => ({
  showMarked: () => dispatch (showMarked()),
  notShowMarked: () => dispatch (notShowMarked()),
  sortAscending: () => dispatch (sortAscending()),
  sortDescending: () => dispatch (sortDescending())
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
