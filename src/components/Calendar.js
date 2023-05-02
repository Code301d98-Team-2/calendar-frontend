import '../App.css';
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import axios from 'axios';

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
        start: new Date(2023, 4, 1, 9, 0, 0),
        end: new Date(2023, 4, 5, 17, 0, 0),
        color: "blue"
    },

    {
        title: "Second Shift",
        allDay: false,
        start: new Date(2023, 4, 1, 17, 0, 0),
        end: new Date(2023, 4, 5, 1, 0, 0),
        color: "green"
    },

    {
        title: "Third Shift",
        allDay: false,
        start: new Date(2023, 4, 1, 1, 0, 0),
        end: new Date(2023, 4, 5, 9, 0, 0),
        color: "orange"
    }
]

function eventStyleGetter(event, start, end, isSelected) {
    let backgroundColor = '#f4f4f4';
    let borderColor = '#ccc';

    if (event.color === 'blue') {
        backgroundColor = '#F44336';
        borderColor = '#E53935';
    } else if (event.color === 'green') {
        backgroundColor = '#FF9800';
        borderColor = '#F57C00';
    } else if (event.color === 'orange') {
        backgroundColor = '#4CAF50';
        borderColor = '#388E3C';
    }
    return {
        style: {
            backgroundColor: backgroundColor,
            borderColor: borderColor
        }
    };
}

const Legend = () => {
    const legendItems = {
        blue: 'First Shift',
        green: 'Second Shift',
        orange: 'Third Shift'
    }
    return (
        <div className="legend">
            {Object.entries(legendItems).map(([color, label]) => (
                <div key={color}>
                    <div className="legend-color" style={{ backgroundColor: color }} />
                    {label}
                </div>
            ))}
        </div>
    );
};



function CalendarApp() {
    return (
        <div>
            <Legend />
            <Calendar
                localizer={localizer} events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, margin: "50px" }}
                eventPropGetter={eventStyleGetter} />
        </div>
    )
}

export default CalendarApp;