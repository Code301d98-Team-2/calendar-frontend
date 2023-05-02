import "../App.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import DatePicker from "react-datepicker";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Component } from "react";

const locales = {
  "en-us": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

class EmployeeSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shifts: [],
      dayShiftPeople: [],
      midShiftPeople: [],
      nightShiftPeople: []
    };
  }

  componentDidMount() {
    this.getSchedule();
  }
  getSchedule = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/getschedules`;
      let urlData = await axios.get(url);
      const shifts = urlData.data;
      const dayShiftPeople = shifts.flatMap(shift => shift.dayShift);
      const midShiftPeople = shifts.flatMap(shift => shift.midShift);
      const nightShiftPeople = shifts.flatMap(shift => shift.nightShift);
      this.setState({ shifts, dayShiftPeople, midShiftPeople, nightShiftPeople });
    } catch (error) {
      console.log(error.message);
    }
  }
  render() {
    return (
      <div>
        <CalendarApp
          dayShiftPeople={this.state.dayShiftPeople}
          midShiftPeople={this.state.midShiftPeople}
          nightShiftPeople={this.state.nightShiftPeople}
        />
      </div>
    )
  }
}


function eventStyleGetter(event, start, end, isSelected) {
  let backgroundColor = "#f4f4f4";
  let borderColor = "#ccc";

  if (event.color === "blue") {
    backgroundColor = "##a300ff";
    borderColor = "##a300ff";
  } else if (event.color === "green") {
    backgroundColor = "#FF9800";
    borderColor = "#F57C00";
  } else if (event.color === "orange") {
    backgroundColor = "#4CAF50";
    borderColor = "#388E3C";
  }
  return {
    style: {
      backgroundColor: backgroundColor,
      borderColor: borderColor,
    },
  };
}

function CalendarApp({ dayShiftPeople, midShiftPeople, nightShiftPeople }) {

  const events = [];

  for (let month = 0; month < 12; month++) {
    const year = 2023;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      dayShiftPeople.forEach(employeeId => {
        events.push(
          {
            title: `Day Shift - Employee ${employeeId}`,
            allDay: false,
            start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0),
            end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 16, 0, 0),
            color: "blue",
          });
      });
      midShiftPeople.forEach(employeeId => {
        events.push(
          {
            title: `Mid Shift - Employee ${employeeId}`,
            allDay: false,
            start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 16, 0, 0),
            end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 0),
            color: "green",
          });
      });
      nightShiftPeople.forEach(employeeId => {
        events.push(
          {
            title: `Night Shift - Employee ${employeeId}`,
            allDay: false,
            start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0),
            end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0),
            color: "orange",
          });
      });
    }
  }

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        eventComponent={Event}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 800, margin: "50px" }}
        eventPropGetter={eventStyleGetter}
      />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button style={{ marginRight: "50px", marginLeft: "975px" }}>Generate Schedule</Button>
        <Button>Send Schedule</Button>
      </div>
    </div>
  );
}

export default EmployeeSchedule;
