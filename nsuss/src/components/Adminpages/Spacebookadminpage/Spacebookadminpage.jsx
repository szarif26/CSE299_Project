import React, { useEffect, useState } from "react";
import classes from "./Spacebookadminpage.module.css";
import { Link } from "react-router-dom";
const Spacebookadminpage = () => {
  const [spacebook, setSpacebook] = useState([]);
  useEffect(() => {
    getSpacebook();
  }, []);
  const getSpacebook = async () => {
    let result = await fetch("http://localhost:4000/viewspacebook");
    result = await result.json();
    setSpacebook(result);
  };
  console.warn(spacebook);



  const deleteSpacebook = async (Bookingid, userid, area, date, timeslot) => {
    console.warn(Bookingid, userid, area, date, timeslot)
    let result = await fetch(`http://localhost:4000/deleteSpacebook/${Bookingid}`, {
      method: "Delete"
    });
    result = await result.json();
    if (result) {
      getSpacebook();
    }
  }
  return (
    <div className={classes.background1}>
      <div className={classes.container2}>
        <div className={classes.Spacebook_List}>
          <h2 className={classes.heading}>The Booking List is as follows:</h2>
          <ul className={classes.ul}>
            <li className={classes.li1}>#</li>
            <li className={classes.li1}>BookingId</li>
            <li className={classes.li}>User ID</li>
            <li className={classes.li}>Area</li>
            <li className={classes.li}>Date</li>
            <li className={classes.li}>Time Slot</li>
            <li className={classes.li1}>Status</li>
            <li className={classes.li2}>Comment</li>
          </ul>
          {spacebook.map((spacebook, index) => (
            <ul key={spacebook} >
              <li className={classes.li1}>{index + 1}</li>
              <li className={classes.li1}>{spacebook.Bookingid}</li>
              <li className={classes.li}>{spacebook.userid}</li>
              <li className={classes.li}>{spacebook.area}</li>
              <li className={classes.li}>{spacebook.date}</li>
              <li className={classes.li}>{spacebook.timeslot}</li>
              <li className={classes.li1}>{spacebook.status}</li>
              <li className={classes.li2}>{spacebook.comment}</li>
              <button on onClick={() => deleteSpacebook(spacebook.Bookingid)} className={classes.btn}>Delete</button>
              <Link className={classes.nounderline} to={"/UpdateSB/" + spacebook.Bookingid}>
                <button type="submit" className={classes.btn}> Update
                </button>
              </Link>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spacebookadminpage;
