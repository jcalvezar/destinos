import "date-fns";
import React, { useState, useEffect } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  InlineDatePicker,
  Calendar
} from "@material-ui/pickers";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
     "& .MuiPickersDay-day": {
    width: window.innerWidth * 0.1,
    height: 50,
    borderRadius: 0,
    alignContent: "flex-start",
    justifyContent: "flex-end",
    alignItems:'flex-start',
    backgroundColor:'white',
  marginBottom: 4,
  },

  '& .MuiTypography-caption':{
    width: window.innerWidth * 0.1,
    fontSize: 24

  },

  '& .MuiPickersCalendar-week':{
    backgroundColor: "#f5f5f5"
  },

  '& .MuiPickersDay-current':{
    backgroundColor:'blue'
  }



       
  }
});

export default function Calendario() {
  const [value, handleDateChange] = useState(new Date());
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Calendar className = {classes.calendarStyle}
          date={new Date()}
          onChange={date => console.log(date)}
          leftArrowIcon={<KeyboardArrowLeftIcon />}
          rightArrowIcon={<KeyboardArrowRightIcon />}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
}
