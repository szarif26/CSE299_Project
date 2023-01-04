import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import classes from "./AnswerScript.module.css";

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

    const handleUpdate = async () => {
        console.warn(marks);
        let result = await fetch(`http://localhost:4000/updatemarks/${params.ansid}`, {
            method: 'Put',
            body: JSON.stringify({ marks }),
            headers: {
                'Content-Type': 'Application/json'
            }
        });
        result = await result.json()
        console.warn(result)
        if (result) {
            alert("Marks Added");
            navigate("/checkanswer/" + courseid_sec);
        }
    };

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
                    <input
                        type="text"
                        placeholder="Marks"
                        className={classes.inputbox}
                        onChange={(e) => setMarks(e.target.value)}
                        value={marks}
                    />
                    <button className={classes.button1} onClick={handleUpdate}>Submit</button>
                </div>
            </div>
        </div>

    );
}

export default AnswerScript;