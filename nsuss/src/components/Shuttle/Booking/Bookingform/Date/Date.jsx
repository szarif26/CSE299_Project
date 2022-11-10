import React from 'react';
import classes from './Date.module.css';

const Date = () => {
    return (
        <div className={classes.form}>
            <label className={classes.formlabel}>Date</label>
            <input id="dateRequired" type="date" name="dateRequired"/>	
        </div>
    );
  };
  
  export default Date;
