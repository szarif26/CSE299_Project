import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from './Spacebookuserpage.module.css';

const spacebookuserpage= () => {
  const [userid, setUserid] = useState(JSON.parse(window.localStorage.getItem("user")).userid);
  const [area, setArea] = useState("");
  const [timeslot, setTimeslot] = useState("");
  const [date, setDate] = useState("");

  const handlespacebook= async ()=>{
    console.warn( userid, area, timeslot, date)
    let result = await fetch("http://localhost:4000/spacebook",{
      method: 'post',
      body:JSON.stringify({ userid, area, timeslot, date}),
      headers:{
        'content-Type':'application/json'
      }
    });
    result= await result.json();
    console.warn(result);
    alert("Successfully Booked Your Space");
  }
  
  return (
    <div className={[classes.background, classes.container].join(" ")}>
      <div className={classes.row}>
        <div className={classes.col}>
          <h1>To book a Space fill the form</h1>
          <Link className={classes.nounderline} to="/userviewcurrentbooking">
            <button type="submit" className={classes.btn} >View Current Bookings</button>
          </Link>
        </div>
        <div className={classes.col}>
          <div className={classes.form}>
              <select hidden onChange={(e) => setUserid(e.target.value)}
                value={userid} ></select>
              <label className={classes.formlabel}>Area</label>
              <select onChange={(e) => setArea(e.target.value)}
                value={area} className={classes.formselect} name="Area">
                <option className={classes.formselect} value="" disabled selected hidden>
                  Select an option
                </option>
                <option className={classes.formselect} value="NSU Field">NSU Field</option>
                <option className={classes.formselect} value="NSU Indoor Court">NSU Indoor Court</option>
                <option className={classes.formselect} value="Billiard Room">Billiard Room</option>
                <option className={classes.formselect} value="Audi 801">Audi 801</option>
                <option className={classes.formselect}value="Main Auditorium">Main Auditorium</option>
              </select>


              <br></br>
              <br></br>
              
              <label className={classes.formlabel}>Time Slot</label>
              <select onChange={(e) => setTimeslot(e.target.value)}
                value={timeslot} className={classes.formselect} name="time_slot">
                <option className={classes.formselect} value="" disabled selected hidden>
                  Select a Slot
                </option>
                <option className={classes.formselect} value="8:00AM-9:30AM">8:00AM-9:30AM</option>
                <option className={classes.formselect} value="9:40AM-11:10AM">9:40AM-11:10AM</option>
                <option className={classes.formselect} value="11:20AM-12:50PM">11:20AM-12:50PM</option>
                <option className={classes.formselect} value="1:00PM-2:30PM">1:00PM-2:30PM</option>
                <option className={classes.formselect} value="2:40PM-4:10PM">2:40PM-4:10PM</option>
                <option className={classes.formselect} value="4:20PM-5:50PM">4:20PM-5:50PM</option>
              </select>

              <br></br>
              <br></br>
              
              <label  className={classes.formlabel}>Date</label>
              <input onChange={(e) => setDate(e.target.value)}
                value={date} className={classes.formselect} id="dateRequired" type="date" name="dateRequired" />

              <br></br>
              <br></br>
              
              <button onClick={handlespacebook} className={classes.btn} >Confirm Booking</button>

          </div>
        </div>
      </div>
    </div>
  );
}
export default spacebookuserpage;
