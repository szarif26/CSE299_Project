import React from "react";
import classes from "./Bookingpage.module.css";

function booking() {
  return (
    <div className={[classes.background, classes.container].join(" ")}>
      <div className={classes.row}>
        <div className={classes.col}>
          <div className={classes.form}>
            <select></select>
            <label className={classes.formlabel}>Area</label>
            <select className={classes.formselect} name="Area">
              <option
                className={classes.formselect}
                value=""
                disabled
                selected
                hidden
              >
                Select an option
              </option>
              <option className={classes.formselect} value="NSU Field">
                NSU Field
              </option>
              <option className={classes.formselect} value="NSU Indoor Court">
                NSU Indoor Court
              </option>
              <option className={classes.formselect} value="Billiard Room">
                Billiard Room
              </option>
              <option className={classes.formselect} value="Audi 801">
                Audi 801
              </option>
              <option className={classes.formselect} value="Main Auditorium">
                Main Auditorium
              </option>
            </select>

            <br></br>
            <br></br>

            <label className={classes.formlabel}>Time Slot</label>
            <select className={classes.formselect} name="time_slot">
              <option
                className={classes.formselect}
                value=""
                disabled
                selected
                hidden
              >
                Select a Slot
              </option>
              <option className={classes.formselect} value="8:00AM">
                8:00AM-9:30AM
              </option>
              <option className={classes.formselect} value="9:40AM">
                9:40AM-11:10AM
              </option>
              <option className={classes.formselect} value="11:20AM">
                11:20AM-12:50PM
              </option>
              <option className={classes.formselect} value="12:50PM">
                1:00PM-2:30PM
              </option>
              <option className={classes.formselect} value="2:40PM">
                2:40PM-4:10PM
              </option>
              <option className={classes.formselect} value="4:10PM">
                4:20PM-5:50PM
              </option>
            </select>

            <br></br>
            <br></br>

            <label className={classes.formlabel}>Date</label>
            <input
              className={classes.formselect}
              id="dateRequired"
              type="date"
              name="dateRequired"
            />

            <br></br>
            <br></br>

            <button className={classes.btn}>Confirm Booking</button>
          </div>
        </div>

        <div className={classes.col}>
          <h1 className={classes.h1}>To book a Seat fill the form</h1>
          <button className={classes.btn}>View Past Travels</button>
        </div>
      </div>
    </div>
  );
}
export default booking;
