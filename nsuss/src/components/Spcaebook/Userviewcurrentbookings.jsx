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


   
      <div className={classes.background1}>
      <div className={classes.container2}>
      <div className={classes.Spacebook_List}>
    
      <h1 className={classes.heading}>Booking List</h1>
      <ul className={classes.ul}>
        <li className={classes.li1}>#</li>
       
        <li className={classes.li}>Area</li>
        <li className={classes.li}>Date</li>
        <li className={classes.li}>Time Slot</li>
        <li className={classes.li}> Status</li>
        <li className={classes.li2}>Comment</li>
      </ul>
      {
        spacebook.map((spacebook,index)=>
        <ul key={spacebook} className={classes.ul}>
          <li className={classes.li1}>{index+1}</li>
        
        <li className={classes.li}>{spacebook.area}</li>
        <li className={classes.li}>{spacebook.date}</li>
        <li className={classes.li}>{spacebook.timeslot}</li>
        <li className={classes.li}>{spacebook.status}</li>
        <li className={classes.li2}>{spacebook.comment}</li>
      </ul>
        )
      }
    </div>
    </div>
</div>

  );
}

export default Userviewcurrentbookings;