import React, { Component } from 'react';

class EventBox extends Component {
  constructor() {
    super();
    this.validateAndSend = this.validateAndSend.bind(this);
  }

  validateAndSend() {
    var ustarttime = document.getElementsByName("start-time")[0].value;
    var uendtime = document.getElementsByName("end-time")[0].value;
    var udescription = document.getElementsByName("description")[0].value;
    if (ustarttime === "") {
      alert("ERROR: Please provide a starting time.");
    } else if (uendtime === "") {
      alert("ERROR: Please provide an ending time.");
    } else if (udescription === "") {
      alert("ERROR: Please provide a description.");
    } else {
      var dateformat = this.props.selectedDay + "/" + (this.props.selectedMonth + 1) + "/" + this.props.selectedYear;
      var json = '{"date":"' + dateformat + '","starttime":"'+ ustarttime +'","endtime":"' + uendtime + '","description":"' + udescription + '"}'

      fetch ('/calevents', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: json
      })
        .then(function(res) {return res.json();})
    }
    //TODO: This component needs to update to show the changes
    this.props.actioncloseevents();

  }

  render() {
    return (
      <div>
      <div id="event-box-header" className="noselect">
      <div className="float-left">Events</div> <div className="float-right" onClick={this.props.actioncloseevents}>X</div>
      <div>{this.props.selectedMonth}/{this.props.selectedDay}/{this.props.selectedYear}</div>
      </div>
      <div id="new-events-panel">
      New event today
      <form>
      <div>
      Start Time:
      <input type="time" name="start-time"></input></div>
      <div>
      End Time:
      <input type="time" name="end-time"></input></div>
      <div>
      <textarea placeholder="(description)" name="description"></textarea></div>
      <button onClick={this.validateAndSend} type="button">Submit</button></form>
      </div>
      <div>Events:</div>
      <div>{this.props.events.map (calevent =>
        <div key={calevent._id} className="event-ind">date: {calevent.date}, start time: {calevent.starttime}, end time: {calevent.endtime}, description: {calevent.description}</div>
      )}
      </div>
      </div>
    );
  }
}

export default EventBox;
