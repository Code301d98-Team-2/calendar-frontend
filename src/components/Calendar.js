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

function CalendarApp() {

  const events = [];
  
  for (let month = 0; month < 12; month++) {
    const year = 2023;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
  
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      events.push(
        {
          title: "First Shift",
          allDay: false,
          start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0),
          end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 16, 0, 0),
          color: "blue",
        },
        {
          title: "Second Shift",
          allDay: false,
          start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 16, 0, 0),
          end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 0),
          color: "green",
        },
        {
          title: "Third Shift",
          allDay: false,
          start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0),
          end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0),
          color: "orange",
        },
      );
    }
  }

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
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

export default CalendarApp;
