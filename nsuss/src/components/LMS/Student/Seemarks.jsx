import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import classes from "./Seemarks.module.css";

const Seemarks = () => {
    const [answerscript, setAnswerscript] = useState([]);
    const params = useParams();

    useEffect(() => {
        getanswerscript();
    }, []);

    const getanswerscript = async () => {
        console.warn(params)
        let result = await fetch(`http://localhost:4000/getanswerforstud/${params.studentid}`);
        console.log(result);
        result = await result.json();
        console.warn(result)
        setAnswerscript(result);
    }

    return (

        <div className={classes.background1}>
            <div className={classes.container2}>
                <div className={classes.Spacebook_List}>

                    <h1 className={classes.heading}>Marks List</h1>
                    <ul className={classes.ul}>
                        <li className={classes.li1}>#</li>
                        <li className={classes.li}>Course ID</li>
                        <li className={classes.li}>Exam Name</li>
                        <li className={classes.li}>Marks</li>
                        <li className={classes.li}>See Answer</li>
                    </ul>
                    {
                        answerscript.map((answerscript, index) =>
                            <ul key={answerscript} className={classes.ul}>
                                <li className={classes.li1}>{index + 1}</li>
                                <li className={classes.li}>{answerscript.courseid_sec}</li>
                                <li className={classes.li}>{answerscript.examname}</li>
                                <li className={classes.li}>{answerscript.marks}</li>
                                <li className={classes.li}><Link className={classes.nounderline} to={"/answerscriptforstud/" + answerscript.ansid}>
                                    <button className={classes.button1} type="submit" >
                                        See
                                    </button>
                                </Link></li>
                            </ul>
                        )
                    }
                </div>
            </div>
        </div>

    );
}

export default Seemarks;