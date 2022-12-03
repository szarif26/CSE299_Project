import React, { useEffect, useState } from "react";
import classes from "./Userviewcurrentbookings.module.css";
const Userviewcurrentbookings = () => {
  const [spacebook, setSpacebook] = useState([]);
  useEffect(() => {
    getSpacebook();
  }, []);
  const getSpacebook = async () => {
    let result = await fetch('http://localhost:4000/viewspacebook');
    result = await result.json();
    setSpacebook(result);
  }
  console.warn(spacebook);
  
  return (


    <div className={classes.Spacebook_List}>
      <h1>Booking List</h1>
      <ul >
        <li>Area</li>
        <li>Date</li>
        <li>Time Slot</li>
      </ul>
      {
        spacebook.map((spacebook,index)=>
        <ul key={spacebook} >
          <li>{index+1}</li>
        <li>{spacebook.area}</li>
        <li>{spacebook.date}</li>
        <li>{spacebook.timeslot}</li>
      </ul>
        )
      }
    </div>


  );
}

export default Userviewcurrentbookings;