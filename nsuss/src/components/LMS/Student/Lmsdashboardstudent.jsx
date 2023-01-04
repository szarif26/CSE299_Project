import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Lmsdashboardstudent.module.css";

const Lmsdashboardstudent = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses();
  }, []);
  const username = JSON.parse(window.localStorage.getItem("user")).name;
  const studentid = JSON.parse(window.localStorage.getItem("user")).userid;


  const getCourses = async () => {
    let result = await fetch(`http://localhost:4000/getcoursestud/${studentid}`);
    result = await result.json();
    setCourses(result);
  }

  return (
    <div className={[classes.background, classes.container].join(" ")}>
      <div className={classes.row}>
        <div className={classes.col}>
          <h1 className={classes.h1}>Welcome {username} to</h1>
          <h1 className={classes.h1}>
            NSU LMS Dashboard
          </h1>
          <p className={classes.p}>
            The NSU LMS System is  meant for helping the institution. This module will help to run the daily academic operations remotely. It is created for the faculties & students of the institute.
          </p>
          <Link to={"/seemarks/" + studentid} className={classes.nounderline} >
            <button type="submit" className={classes.button}>
                <h5 className={classes.h5}>See Marks</h5>
            </button>
          </Link>
        </div>
        <div className={classes.col}>
          {
            courses.map((courses, index) => (
              <ul key={courses.courseid_sec} >
                <Link to={"/coursepageStud/" + courses.courseid_sec} className={classes.nounderline} >
                  <button type="submit" className={classes.button}>
                    <div className={classes.board}>
                      <h5 className={classes.h5}>{courses.coursename}</h5>
                    </div>
                  </button>
                </Link>
              </ul>
            )
            )
          }
        </div>
      </div>
    </div>

  );
}

export default Lmsdashboardstudent;
