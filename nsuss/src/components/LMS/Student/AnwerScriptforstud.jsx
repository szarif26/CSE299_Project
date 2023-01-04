import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import classes from "./AnswerScriptforstud.module.css";

const AnswerScript = () => {
    const [answer, setAnswer] = useState([]);
    const [courseid_sec, setCourseid_sec] = useState("");
    const [marks, setMarks] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getanswer();
    }, []);

    const getanswer = async () => {
        console.warn(params)
        let result = await fetch(`http://localhost:4000/getanswerscript/${params.ansid}`);
        console.log(result);
        result = await result.json();
        console.warn(result)
        setAnswer(result.answer);
        setCourseid_sec(result.courseid_sec);
    }

    return (

        <div className={classes.background1}>
            <div className={classes.container2}>
                <div className={classes.Spacebook_List}>

                    <h1 className={classes.heading}>Answer List</h1>
                    <ul className={classes.ul}>
                        <li className={classes.li1}>#</li>

                        <li className={classes.li}>Answer</li>
                    </ul>
                    {
                        answer.map((result, index) =>
                            <ul key={answer} className={classes.ul}>
                                <li className={classes.li1}>{index + 1}</li>
                                <li className={classes.li}>{answer[index]}</li>
                            </ul>
                        )
                    }
                </div>
            </div>
        </div>

    );
}

export default AnswerScript;