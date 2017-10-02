import React, { Component } from 'react';

class Days extends Component {
  //Get the amount of days in a particular month
  amountDays(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  firstDayInMonth(year, month) {
    return new Date(year,month+1,-1).getDay();
  }

  render() {
    var amountDays = this.amountDays(this.props.year, this.props.month);
    var firstDayInMonth = this.firstDayInMonth(this.props.year, this.props.month);
    var day = 1;
    var allDays = []; //Final array to push
    //Asked for 5 rows, but some months (like December of this year!) have 6 rows
    for (var i = 0; i < 6; i++) {
      var weeksArray = []; //An array for each week
      for (var j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDayInMonth) || day > amountDays) {
          weeksArray.push(<div className="day-box"> </div>); //Empty box
        } else {
          if (this.props.selectedDay === day && this.props.month === this.props.selectedMonth && this.props.year === this.props.selectedYear) {
            weeksArray.push(<div key={day} onClick={this.props.actionselectdate.bind(this, day)} id="selected-day" className="day-box beautiful-day noselect" >{day}</div>);
            day++;
          } else {
            weeksArray.push(<div key={day} onClick={this.props.actionselectdate.bind(this, day)} className="day-box beautiful-day noselect" >{day}</div>);
            day++;
          }
        }
      }
      allDays.push(<div>{weeksArray}</div>);
    }

    return (
      <div>
      <div id="day-zone">{allDays}</div>
      </div>
    );
  }
}

export default Days;
