import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from 'react-router-dom';
import classes from "./Attendancepage.module.css";

const Attendancepage = () => {
    const [studentlist, setStudentlist] = useState([]);
    const [date, setDate] = useState("");
    const [courseid_sec, setCourseid_sec] = useState("");
    const [list, setlist] = useState([]);
    const [attendanceid, setattendanceid] = useState(Math.round(Math.random() * 10140));
    const [values, setValues] = useState("")

    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getCourseDetails();
    }, []);

    const getCourseDetails = async () => {
        console.warn(params)
        let result = await fetch(`http://localhost:4000/getcoursedetail/${params.courseid_sec}`);
        console.log(result);
        result = await result.json();
        console.warn(result)
        console.log(result);
        setStudentlist(result.studentsid);
        setCourseid_sec(result.courseid_sec);
    }
    console.log(studentlist);

    {
        var today = new Date();
        var tdd = today.getDate();
        var tmm = today.getMonth() + 1; //January is 0!
        var tyyyy = today.getFullYear();
    }

    {var startday = new Date();
        startday.setDate(startday.getDate());
        var dd = startday.getDate();
        var mm = startday.getMonth() + 1; //January is 0!
        var yyyy = startday.getFullYear();
        if (dd < 10) {
          dd = '0' + dd
        }
        if (mm < 10) {
          mm = '0' + mm
        }
        startday = yyyy + '-' + mm + '-' + dd;}
        {var finalday = new Date();
          finalday.setDate(finalday.getDate());
          var fdd = finalday.getDate();
          var fmm = finalday.getMonth() + 1; //January is 0!
          var fyyyy = finalday.getFullYear();
          if (fdd < 10) {
            fdd = '0' + fdd
          }
          if (fmm < 10) {
            fmm = '0' + fmm
          }
          finalday = fyyyy + '-' + fmm + '-' + fdd;} 

    console.log(date);

    const onchangeInput = () => {
        list.push(values);
    };

    const handleAttendance = async () => {
        console.warn(attendanceid, courseid_sec, date, list)
        let result = await fetch("http://localhost:4000/setAttendance", {
            method: 'post',
            body: JSON.stringify({ attendanceid, courseid_sec, date, list }),
            headers: {
                'content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Successfully Taken Attendance ");
            navigate("/coursepageFac/" + courseid_sec);
        }
    };

    return (

        <div className={classes.background1}>
            <div className={classes.container2}>
                <div className={classes.Spacebook_List}>
                    <h1 className={classes.h1}>{tdd}/{tmm}/{tyyyy}</h1>
                    <h1 className={classes.heading}>Attendance</h1>
                    <select onChange={(e) => setValues(e.target.value)}
                        value={values} className={classes.formselect} name="Status">
                        <option className={classes.formselect} value="" disabled selected hidden>
                            Select an option
                        </option>
                        <option className={classes.formselect} value="Present">Present</option>
                        <option className={classes.formselect} value="Absent">Absent</option>
                    </select>
                    <label className={classes.formlabel}>Date</label>
                    
                    <input onChange={(e) => setDate(e.target.value)}
                        value={date} className={classes.formselect} id="dateRequired" type="date" name="dateRequired" min={startday} max={finalday} />
                    
                    <ul className={classes.ul}>
                        <li className={classes.li1}>#</li>
                        <li className={classes.li}>ID</li>
                        <li className={classes.li}>Confirm</li>
                    </ul>
                    {
                        studentlist.map((result, index) =>
                            <ul key={studentlist} className={classes.ul}>
                                <li className={classes.li1}>{index + 1}</li>
                                <li className={classes.li}>{studentlist[index]}</li>
                                <li className={classes.li}>
                                    <button onClick={onchangeInput} className={classes.button}>Set</button>
                                </li>
                            </ul>
                        )
                    }
                    <button onClick={handleAttendance} className={classes.button1}>Submit Attendance</button>
                </div>
            </div>
        </div>

    );
}

export default Attendancepage;