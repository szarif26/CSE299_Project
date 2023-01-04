import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from 'react-router-dom';
import classes from "./CoursepageStud.module.css";

const CoursepageStud = () => {
    const [courseid_sec, setCourseid_sec] = useState("");
    const [coursename, setCoursename] = useState("");
    const [facultyid, setFacultyid] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getCourseDetails();
    }, []);
    const username = JSON.parse(window.localStorage.getItem("user")).name;
    const studentid = JSON.parse(window.localStorage.getItem("user")).userid;

    const getCourseDetails = async () => {
        console.warn(params)
        let result = await fetch(`http://localhost:4000/getcoursedetail/${params.courseid_sec}`);
        console.log(result);
        result = await result.json();
        console.warn(result)
        setCourseid_sec(result.courseid_sec)
        setCoursename(result.coursename)
        setFacultyid(result.facultyid)
    }

    return (
        <div className={[classes.background, classes.container].join(" ")}>
            <div className={classes.row}>
                <div className={classes.col}>
                    <h1 className={classes.h1}>Welcome {username} to {coursename}</h1>
                    <h1 className={classes.h1}>
                        Faculty Initial: {facultyid}
                    </h1>
                    <p className={classes.p}>
                        The NSU LMS System is  meant for helping the institution. This module will help to run the daily academic operations remotely. It is created for the faculties & students of the institute.
                    </p>
                    <button type="submit" className={classes.button}>
                        Details

                    </button>
                </div>
                <div className={classes.col}>
                   
                    <Link  to={"/takeexam/" + courseid_sec}className={classes.nounderline} >
                        <button type="submit" className={classes.button}>
                            <div className={classes.board3}>
                                <h5 className={classes.h5}>See Exam List</h5>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default CoursepageStud;
