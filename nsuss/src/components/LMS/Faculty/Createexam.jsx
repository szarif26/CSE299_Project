import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import classes from "./Createexam.module.css";

const Createexam = () => {
  const [examid, setExamid] = useState(Math.round(Math.random() * 1000000));
  const [courseid_sec, setCourseid_sec] = useState("");
  const [question, setQuestion] = useState([]);
  const [examname, setExamname] = useState("");
  const [values, setValues] = useState("");
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
    setCourseid_sec(result.courseid_sec)

  }
  const onchangeInput = () => {
    question.push(values);
    alert ("Question Added");
  };
  console.log(question);
  console.log(values);

  const handleExam = async () => {
    console.warn(courseid_sec, question, examid,examname)
    let result = await fetch("http://localhost:4000/exam", {
      method: 'post',
      body: JSON.stringify({ courseid_sec,examid, question, examname }),
      headers: {
        'content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      alert("Successfully created exam ");
      navigate("/coursepageFac/" + courseid_sec);
    }
  };

  return (

    <div className={classes.background1}>

      <div className={classes.Createexam_List}>

        <h1 className={classes.heading}>Create exam</h1>
        <input
          type="text"
          placeholder="Exam Name"
          className={classes.inputbox}
          onChange={(e) => setExamname(e.target.value)}
          value={examname}
        />
        <input
          type="text"
          placeholder="Course_Sec"
          className={classes.inputbox}
          onChange={(e) => setCourseid_sec(e.target.value)}
          value={courseid_sec}
        />



        <h1 className={classes.heading}>Questions</h1>
        <input
          type="text"
          placeholder="Question"
          className={classes.inputbox}
          onChange={(e) => setValues(e.target.value)}
          value={values}
        />

        <button  className = {classes.button} onClick={onchangeInput} > Add question</button>

        <form className={classes.form} >
        {
         
          question.map((question, index) =>
            <ul key={question} className={classes.ul}>
              <li className={classes.li1}>{index + 1}</li>
              <li className={classes.li1}>{examid}</li>
              <li className={classes.li}>{question}</li>
            </ul>
          )
        
        }
        </form>
      <br></br>
        <button   className = {classes.button1}  onClick={handleExam}> Create exam</button>



      </div>
    </div>


  );
}

export default Createexam;