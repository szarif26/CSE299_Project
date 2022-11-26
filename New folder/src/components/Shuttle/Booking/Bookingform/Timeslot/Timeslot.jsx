import React from 'react';
import classes from './Timeslot.module.css';

const Timeslot = () => {
    return (
    <div className={classes.form}>
        <label className={classes.formlabel}>Time Slot</label>
        <select name="time_slot">
        <option value="" disabled selected hidden>Select a Slot</option>
        <option value="8:00AM">8:00AM</option>
        <option value="9:40AM">9:40AM</option>
        <option value="11:20AM">11:20AM</option>
        <option value="12:50PM">12:50PM</option>
        <option value="2:40PM">2:40PM</option>
        <option value="4:10PM">4:10PM</option>
        </select>
    </div>
    );
  };
  
  export default Timeslot;
