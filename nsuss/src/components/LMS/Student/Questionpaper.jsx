import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useNavigation } from 'react-router-dom';
import classes from "./Questionpaper.module.css";


const questionpaper = () => {

  const [examname, setExamname] = useState("");
  const [question, setQuestion] = useState([]);
  const [courseid_sec, setCourseid_sec] = useState("");
  const studentid = JSON.parse(window.localStorage.getItem("user")).userid;
  const [answer, setAnswer] = useState([]);
  const [values, setValues] = useState("");
  const [ansid, setAnsid] = useState(Math.round(Math.random() * 1000000));

  const params = useParams();
  const navigate= useNavigate();

  useEffect(() => {
    getExam();
  }, []);
  const getExam = async () => {
    console.warn(params)
    let result = await fetch(`http://localhost:4000/exam/${params.examid}`);
    console.log(result);
    result = await result.json();
    console.warn(result)
    setCourseid_sec(result.courseid_sec)
    setQuestion(result.question)
    setExamname(result.examname)



  }
  console.log(question);

  const onchangeInput = () => {
    answer.push(values);
    alert("Answer Added");
  };

  const handleQuestion = async () => {
    console.warn(courseid_sec, question, answer, ansid, examname)
    let result = await fetch("http://localhost:4000/answerscript", {
      method: 'post',
      body: JSON.stringify({ courseid_sec, answer, ansid, studentid, question, examname }),
      headers: {
        'content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      alert("Successfully Submitted ");
      navigate("/takeexam/" + courseid_sec);
    }
  };

  return (

    <div className={classes.background1}>

      <div className={classes.Createexam_List}>

        <h1 className={classes.heading}>Exam</h1>

        <h1 className={classes.heading}>Questions</h1>
        <input
          hidden
          type="text"
          placeholder=""
          className={classes.inputbox}
          onChange={(e) => setAnsid(e.target.value)}
          value={ansid}
        />
        <input
          hidden
          type="text"
          placeholder=""
          className={classes.inputbox}
          onChange={(e) => setExamname(e.target.value)}
          value={examname}
        />
        <h1 className={classes.question}>Course :{courseid_sec}</h1>
        <h1 className={classes.question}>Exam: {examname}</h1>

        <input
          hidden
          type="text"
          placeholder=""
          className={classes.inputbox}
          onChange={(e) => setCourseid_sec(e.target.value)}
          value={courseid_sec}
        />
        <br></br>
        <form className={classes.form} >
          <h1 className={classes.question}> Question Paper</h1>
          {
            question.map((result, index) =>
              <ul key={question} className={classes.ul}>
                <li className={classes.li1}>{index + 1}</li>
                <li className={classes.li}>{question[index]}</li>
              </ul>
            )
          }
        </form>
        <input
          type="text"
          placeholder="Enter Answer"
          className={classes.inputbox}
          onChange={(e) => setValues(e.target.value)}
          value={values}
        ></input>

        <button className={classes.button} onClick={onchangeInput} > + Add Answer</button>
        <br></br>
        <br></br>
        <form className={classes.form} >
          <h1 className={classes.question}> Your Answers</h1>
          {
            answer.map((answer, index) =>
              <ul key={answer} className={classes.ul}>
                <li className={classes.li1}>{index + 1}</li>
                <li className={classes.li}>{answer}</li>
              </ul>
            )
          }
        </form>

        <br></br>
        <button onClick={handleQuestion} className={classes.button}>
          Submit
        </button>
      </div>
    </div>


  );
}

export default questionpaper;