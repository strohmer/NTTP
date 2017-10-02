import React, { Component } from 'react';
import CalendarHeader from './CalendarHeader';
import DaysOfWeek from './DaysOfWeek';
import Days from './Days';
import EventBox from './EventBox';
import '../css/Calendar.css';

class Calendar extends Component {
  constructor() {
    super();
    var currentDate = new Date();
    this.state = {
      months: ['January','February','March','April','May','June','July',
      'August','September','October','November','December'],
      events: [],
      year: currentDate.getFullYear(),
      monthnum: currentDate.getMonth(),
      selectedDay: currentDate.getDate(),
      selectedMonth: currentDate.getMonth(),
      selectedYear: currentDate.getFullYear()
    };
    this.nextMonth = this.nextMonth.bind(this);
    this.previousMonth = this.previousMonth.bind(this);
    this.selectDate = this.selectDate.bind(this);
    this.closeEvents = this.closeEvents.bind(this);
    this.updateEvents = this.updateEvents.bind(this);
  }

  //Events
  componentDidMount() {
    fetch('/calevents', {
      accept: "application/json"
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          events: res
        })
      })
  }

  nextMonth() {
    if (this.state.monthnum > 10) {
      this.setState({
        monthnum: 0,
        year: this.state.year + 1
      });
    } else {
      this.setState({
        monthnum: this.state.monthnum + 1
      });
    }
  }

  previousMonth() {
    if (this.state.monthnum === 0) {
      this.setState({
        monthnum: 11,
        year: this.state.year - 1
      });
    } else {
      this.setState({
        monthnum: this.state.monthnum - 1
      });
    }
  }

  selectDate (day) {
    this.setState({
      selectedDay: day,
      selectedMonth: this.state.monthnum,
      selectedYear: this.state.year
    });
  }

  closeEvents() {
    this.setState({
      selectedDay: null,
      selectedMonth: null,
      selectedYear: null
    });
  }

  updateEvents() {
    this.forceUpdate();
  }

  render() {
    return (
      <div>
      <div id="main-title" className="noselect">Jasons semi-awesome calendar</div>
      <div id="main-calendar">
        <CalendarHeader months={this.state.months} monthnum={this.state.monthnum} year={this.state.year} actionnext={this.nextMonth} actionprev={this.previousMonth}/>
        <div id="days-of-week">
          <DaysOfWeek />
        </div>
        <div>
          <Days month={this.state.monthnum} year={this.state.year} selectedYear={this.state.selectedYear} selectedMonth={this.state.selectedMonth} selectedDay={this.state.selectedDay} events={this.state.events} actionselectdate={this.selectDate}/>
        </div>
      </div>
        {!(this.state.selectedDay === null) && <div id="events-panel"> <EventBox events={this.state.events} selectedYear={this.state.selectedYear} selectedMonth={this.state.selectedMonth} selectedDay={this.state.selectedDay} actioncloseevents={this.closeEvents} actionupdateevents={this.updateEvents} />
        </div>}
      </div>
    );
  }
}

export default Calendar;
