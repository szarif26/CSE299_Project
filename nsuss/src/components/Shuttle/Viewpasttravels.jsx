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
      <h1>Past Travel List</h1>
      <ul >
        <li>Route</li>
	      <li>Way</li>
        <li>Date</li>
        <li>Time Slot</li>
      </ul>
      {
        shuttlebook.map((shuttlebook,index)=>
        <ul key={shuttlebook} >
          <li>{index+1}</li>
        <li>{shuttlebook.route}</li>
	<li>{shuttlebook.way}</li>
        <li>{shuttlebook.date}</li>
        <li>{shuttlebook.timeslot}</li>
      </ul>
        )
      }
    </div>


  );
}

export default Viewpasttravels;