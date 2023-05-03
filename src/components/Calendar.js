import "../App.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
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
      nightShiftPeople: [],
      dayShiftPeopleSecond: [],
      midShiftPeopleSecond: [],
      nightShiftPeopleSecond: []
    };
  }

  
  componentDidMount() {
    this.getSchedule();
    // this.getScheduleSecond();
  }
  getSchedule = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/test2`;
      let urlData = await axios.get(url);
      const shifts = urlData.data;
      console.log(shifts);
      const dayShiftPeople = [];
      const midShiftPeople = [];
      const nightShiftPeople = [];
      const dayShiftPeopleSecond = [];
      const midShiftPeopleSecond = [];
      const nightShiftPeopleSecond = [];
      
      shifts[0].dayShift.forEach(employee => {
        dayShiftPeople.push(employee);
      });
      shifts[0].midShift.forEach(employee => {
        midShiftPeople.push(employee);
      });
      shifts[0].nightShift.forEach(employee => {
        nightShiftPeople.push(employee);
      });

  
      shifts[1].dayShift.forEach(employee => {
        dayShiftPeopleSecond.push({
          firstName: employee.firstName,
          lastName: employee.lastName,
          level: employee.level
        });
      });
      shifts[1].midShift.forEach(employee => {
        midShiftPeopleSecond.push({
          firstName: employee.firstName,
          lastName: employee.lastName,
          level: employee.level
        });
      });
      shifts[1].nightShift.forEach(employee => {
        nightShiftPeopleSecond.push({
          firstName: employee.firstName,
          lastName: employee.lastName,
          level: employee.level
        });
      });
  
      this.setState({ shifts, dayShiftPeople, midShiftPeople, nightShiftPeople, dayShiftPeopleSecond, midShiftPeopleSecond, nightShiftPeopleSecond });
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
        dayShiftPeopleSecond={this.state.dayShiftPeopleSecond}
        midShiftPeopleSecond={this.state.midShiftPeopleSecond}
        nightShiftPeopleSecond={this.state.nightShiftPeopleSecond}
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

function CalendarApp({ dayShiftPeople, midShiftPeople, nightShiftPeople, dayShiftPeopleSecond, midShiftPeopleSecond, nightShiftPeopleSecond }) {

  const events = [];

  for (let i = 1; i <= 30; i += 2) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    dayShiftPeople.forEach(employeeId => {
      events.push(
        {
          title: `Day Shift - Employee ${employeeId.firstName} ${employeeId.lastName} Level - ${employeeId.level}`,
          description: "Yo",
          allDay: false,
          start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0),
          end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 16, 0, 0),
          color: "blue",
        });
    });
    midShiftPeople.forEach(employeeId => {
      events.push(
        {
          title: `Mid Shift - Employee ${employeeId.firstName} ${employeeId.lastName} Level - ${employeeId.level}`,
          allDay: false,
          start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 16, 0, 0),
          end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 0),
          color: "green",
        });
    });
    nightShiftPeople.forEach(employeeId => {
      events.push(
        {
          title: `Night Shift - Employee ${employeeId.firstName} ${employeeId.lastName} Level - ${employeeId.level}`,
          allDay: false,
          start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0),
          end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0),
          color: "orange",
        });
    });
  }

  for (let i = 0; i <= 30; i += 2) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    dayShiftPeopleSecond.forEach(employeeId => {
      events.push(
        {
          title: `Day Shift - Employee ${employeeId.firstName} ${employeeId.lastName} Level - ${employeeId.level}`,
          description: "Yo",
          allDay: false,
          start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0),
          end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 16, 0, 0),
          color: "blue",
        });
    });
    midShiftPeopleSecond.forEach(employeeId => {
      events.push(
        {
          title: `Mid Shift - Employee ${employeeId.firstName} ${employeeId.lastName} Level - ${employeeId.level}`,
          allDay: false,
          start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 16, 0, 0),
          end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 0),
          color: "green",
        });
    });
    nightShiftPeopleSecond.forEach(employeeId => {
      events.push(
        {
          title: `Night Shift - Employee ${employeeId.firstName} ${employeeId.lastName} Level - ${employeeId.level}`,
          allDay: false,
          start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0),
          end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0),
          color: "orange",
        });
    });
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
