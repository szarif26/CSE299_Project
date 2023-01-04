import React, { useEffect, useState } from "react";
import classes from "./Viewpasttravels.module.css";
const Viewpasttravels = () => {

  const [shuttlebook, setShuttlebook] = useState([]);
  useEffect(() => {
    getShuttlebook();
  }, []);

  const key = JSON.parse(window.localStorage.getItem("user")).userid;

  const getShuttlebook = async () => {
    let result = await fetch(`http://localhost:4000/viewpasttravels/${key}`);
    result = await result.json();
    setShuttlebook(result);
  }
  console.warn(shuttlebook);

  return (


    <div className={classes.Shuttlebook_List}>
      <div className={classes.background1}>
        <div className={classes.container2}>
          <h1 className={classes.heading}>Past Travel List</h1>
          <ul className={classes.ul}>
            <li  className={classes.li}>Route</li>
            <li  className={classes.li}>Area</li>
            <li className={classes.li}>Way</li>
            <li className={classes.li}>Date</li>
            <li className={classes.li}> Time Slot</li>
          </ul>
          {
            shuttlebook.map((shuttlebook, index) =>
              <ul key={shuttlebook} className={classes.ul}>
                <li className={classes.li}>{index + 1}</li>
                <li className={classes.li}>{shuttlebook.route}</li>
                <li className={classes.li}>{shuttlebook.way}</li>
                <li className={classes.li}>{shuttlebook.date}</li>
                <li className={classes.li}>{shuttlebook.timeslot}</li>
              </ul>
            )
          }
        </div>
      </div>
    </div>

  );
}

export default Viewpasttravels;