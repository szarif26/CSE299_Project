import React, { useState } from "react";
import classes from "./Printzoneuserpage.module.css";

const printzoneuserpage = () => {

  const [number, setnumber] = useState(false);

  return (
    <div className={[classes.background, classes.container].join(" ")}>
      <div className={classes.row}>
        <div className={classes.col}>
          <div className={classes.form}>
            <label className={classes.formlabel}>
              Select a file for printing:
            </label>
            <br></br>
            <br></br>
            <input type="file" accept=".pdf" />
            <br />
            <br />
              <button onClick={() => setnumber(Math.round(Math.random() * 100000))} className={classes.btn}>Upload !</button>
          </div>
        </div>
        <div className={classes.col}></div>
        {number && <h1>Your code for print is {number}</h1>}
      </div>
    </div>
    
  );
  
};
export default printzoneuserpage;

