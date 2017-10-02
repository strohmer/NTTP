import React, { Component } from 'react';

class DaysOfWeek extends Component {
  render() {
    return (
      <div id="days-of-week" className="noselect">
      <div className="day-of-week-ind">Sun</div>
      <div className="day-of-week-ind">Mon</div>
      <div className="day-of-week-ind">Tue</div>
      <div className="day-of-week-ind">Wed</div>
      <div className="day-of-week-ind">Thu</div>
      <div className="day-of-week-ind">Fri</div>
      <div className="day-of-week-ind">Sat</div>
      </div>
    );
  }
}

export default DaysOfWeek;
