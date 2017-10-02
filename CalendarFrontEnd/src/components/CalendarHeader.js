import React, { Component } from 'react';

class CalendarHeader extends Component {

  render() {
    return (
      <div className="noselect" id="CalendarHeader">
      <div id="previousmonth" onClick={this.props.actionprev}>Previous</div>
      {this.props.months[this.props.monthnum]} {this.props.year}
      <div id="nextmonth" onClick={this.props.actionnext}>Next</div>
      </div>
    );
  }
}

export default CalendarHeader;
