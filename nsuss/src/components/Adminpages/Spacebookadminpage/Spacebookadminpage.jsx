import React, { useEffect, useState } from "react";
import classes from "./Spacebookadminpage.module.css";
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

  return (
    <div>
      <h1 className={classes.h1}>Welcome Spacebook Admin</h1>
      <br></br>
      <br></br>
      <div className={classes.Spacebook_List}>
        <h2>The Booking List is as follows:</h2>
        <ul>
          <li>User ID</li>
          <li>Area</li>
          <li>Date</li>
          <li>Time Slot</li>
        </ul>
        {spacebook.map((spacebook, index) => (
          <ul key={spacebook}>
            <li>{index + 1}</li>
            <li>{spacebook.userid}</li>
            <li>{spacebook.area}</li>
            <li>{spacebook.date}</li>
            <li>{spacebook.timeslot}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Spacebookadminpage;
