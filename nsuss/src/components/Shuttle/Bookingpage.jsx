import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Bookingpage.module.css";

const booking =()=> {

  const [userid, setUserid] = useState(JSON.parse(window.localStorage.getItem("user")).userid);
  const [route, setRoute] = useState("");
  const [way, setWay] = useState("");
  const [timeslot, setTimeslot] = useState("");
  const [date, setDate] = useState("");

  const handleshuttlebook= async ()=>{
    console.warn( userid, route, way, timeslot, date)
    let result = await fetch("http://localhost:4000/shuttlebook",{
      method: 'post',
      body:JSON.stringify({ userid, route, way, timeslot, date}),
      headers:{
        'content-Type':'application/json'
      }
    });
    result= await result.json();
    console.warn(result);
    alert("Successfully Booked Your Travel");
  }

  return (
    <div className={[classes.background, classes.container].join(" ")}>
      <div className={classes.row}>
        <div className={classes.col}>
          <div className={classes.form}>
            <select hidden onChange={(e) => setUserid(e.target.value)}
                value={userid} ></select>

            <label className={classes.formlabel}>Route</label>
            <select onChange={(e) => setRoute(e.target.value)}
                value={route} className={classes.formselect} name="Area">
              <option
                className={classes.formselect}
                value=""
                disabled
                selected
                hidden
              >
                Select an option
              </option>
              <option className={classes.formselect} value="Uttara">
                Uttara
              </option>
              <option className={classes.formselect} value="Dhanmondi">
                Dhanmondi
              </option>
              <option className={classes.formselect} value="Jatrabari">
                Jatrabari
              </option>
              <option className={classes.formselect} value="Mirpur">
                Mirpur
              </option>
              <option className={classes.formselect} value="Azimpur">
                Azimpur
              </option>
            </select>

            <br></br>
            <br></br>

            <label className={classes.formlabel}>Way</label>
            <select onChange={(e) => setWay(e.target.value)}
                value={way} className={classes.formselect} name="Area">
              <option
                className={classes.formselect}
                value=""
                disabled
                selected
                hidden
              >
                Select an option
              </option>
              <option className={classes.formselect} value="Arrival">
                Arrival
              </option>
              <option className={classes.formselect} value="Departure">
                Departure
              </option>
            </select>

            <br></br>
            <br></br>

            <label className={classes.formlabel}>Time Slot</label>
            <select onChange={(e) => setTimeslot(e.target.value)}
                value={timeslot} className={classes.formselect} name="time_slot">
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
                8:00AM
              </option>
              <option className={classes.formselect} value="9:40AM">
                9:40AM
              </option>
              <option className={classes.formselect} value="11:20AM">
                11:20AM
              </option>
              <option className={classes.formselect} value="1:00PM">
                1:00PM
              </option>
              <option className={classes.formselect} value="2:40PM">
                2:40PM
              </option>
              <option className={classes.formselect} value="4:20PM">
                4:20PM
              </option>
            </select>

            <br></br>
            <br></br>

            <label className={classes.formlabel}>Date</label>
            <input onChange={(e) => setDate(e.target.value)}
                value={date} className={classes.formselect}
              id="dateRequired"
              type="date"
              name="dateRequired"
            />

            <br></br>
            <br></br>

            <button onClick={handleshuttlebook} className={classes.btn}>Confirm Booking</button>
          </div>
        </div>

        <div className={classes.col}>
          <h1 className={classes.h1}>To book a Seat fill the form</h1>
          <Link className={classes.nounderline} to="/viewpasttravels">
            <button type="submit" className={classes.btn} >View Past Travels</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default booking;
