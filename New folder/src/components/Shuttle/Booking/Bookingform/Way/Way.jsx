import React from 'react';
import classes from './Way.module.css';

const Way = () => {
    return (
        <div className={classes.form}>
        <label className={classes.formlabel}>Way</label>
        <select name="Way">
        <option value="" disabled selected hidden>Select an option</option>
        <option value="Arrival">Arrival</option>
        <option value="Departure">Departure</option>
        </select>
    </div>
    );
  };
  
  export default Way;
