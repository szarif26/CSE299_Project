import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import classes from "./Takeexam.module.css";


const Takeexam = () => {

  const [courseid_sec, setCourseid_sec] = useState("");
  const [examname, setExamname] = useState("");
  const params = useParams();
  const [exam, setExam] = useState([]);

  useEffect(() => {
    getExam();
  }, []);


  const getExam = async () => {
    let result = await fetch(`http://localhost:4000/Viewquestion/${params.courseid_sec}`);
    result = await result.json();
    setExam(result);
    console.log(result);
  }
  console.warn(exam);




  return (

    <div className={classes.background1}>
<div className={classes.container2}>
      <div className={classes.Createexam_List}>

        <h1 className={classes.heading}>Exam</h1>

        <ul className={classes.ul}>
          <li className={classes.li}>#</li>
          <li className={classes.li}> ExamName</li>
          <li className={classes.li}> Course_Sec</li>
          <li className={classes.li}> Take Exam</li>
        </ul>
        {
          exam.map((exam, index) =>
            <ul key={exam} className={classes.ul}>
              <li className={classes.li}>{index + 1}</li>
              <li className={classes.li}>{exam.examname}</li>

              <li className={classes.li}>{exam.courseid_sec}</li>
              <li className={classes.li2}>
                <Link className={classes.nounderline} to={"/questionpaper/" + exam.examid}>
                  <button className={classes.button1} type="submit" >
                    Take Exam
                  </button>
                </Link>
              </li>
            </ul>
          )
        }

        <br></br>
        <br></br>


</div>



      </div>
    </div>


  );
}

export default Takeexam;