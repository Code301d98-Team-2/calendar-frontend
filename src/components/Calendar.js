import '../App.css';
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";

const locales = {
    "en-us": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
});

const events = [
    {
        title: "First Shift",
        allDay: false,
        start: new Date(2023,5,1),
        end: new Date(2023,5,5)
    }
]

function CalendarApp() {
    return (
        <div>
            <Calendar localizer={localizer}  events={events} 
            startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }}/>
        </div>
    )
}

export default CalendarApp;