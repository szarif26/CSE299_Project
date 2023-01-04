import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from 'react-router-dom';
import classes from "./Studentlist.module.css";

const Studentlist = () => {
    const [studentlist, setStudentlist] = useState([]);
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getCourseDetails();
    }, []);

    /*
    const getstudentdetails = async () => {
        console.warn(params)
        let result = await fetch(`http://localhost:4000/getstudentlist/${params.courseid_sec}`);
        console.log(result);
        result = await result.json();
        console.warn(result)
        setStudentlist(result)
    }
    */

    const getCourseDetails = async () => {
        console.warn(params)
        let result = await fetch(`http://localhost:4000/getcoursedetail/${params.courseid_sec}`);
        console.log(result);
        result = await result.json();
        console.warn(result)
        console.log(result);
        console.log(result.facultyid);
        console.log(result.studentsid);
        setStudentlist(result.studentsid);
    }
    console.log(studentlist);

    return (

        <div className={classes.background1}>
            <div className={classes.container2}>
                <div className={classes.Spacebook_List}>

                    <h1 className={classes.heading}>Student List</h1>
                    <ul className={classes.ul}>
                        <li className={classes.li1}>#</li>

                        <li className={classes.li}>ID</li>
                    </ul>
                    {
                        studentlist.map((result, index) =>
                            <ul key={studentlist} className={classes.ul}>
                                <li className={classes.li1}>{index + 1}</li>
                                <li className={classes.li}>{studentlist[index]}</li>
                            </ul>
                        )
                    }
                </div>
            </div>
        </div>

    );
}

export default Studentlist;