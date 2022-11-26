import React from 'react';
import classes from "./Bookingform.module.css";
import Date from "./Date/Date";
import Stoppage from "./Stoppage/Stoppage";
import Timeslot from "./Timeslot/Timeslot";
import Way from "./Way/Way";

const Bookingform = () => {

    return (
    <div className={classes.form}>
    <h3>If you want to book a travel, please fill in the form below: </h3>
        <Timeslot/>
        <Way/>
        <Date/>
		<Stoppage/>
		<div className={classes.buttons}>
		<button>Confirm Booking</button>
		<button>Reset</button>
		</div>
	</div>
    );
  };
  
  export default Bookingform;
