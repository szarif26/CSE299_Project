import React from "react";
import { Link } from "react-router-dom";
import classes from "./Dashboardpage.module.css";

const Facultydashboardpage = () => {
    const username = JSON.parse(window.localStorage.getItem("user")).name;
    return (
        <div className={[classes.background, classes.container].join(" ")}>
            <div className={classes.row}>
                <div className={classes.col}>
                    <h1 className={classes.h1}>Welcome {username} to</h1>
                    <h1 className={classes.h1}>
                        NSU Service System
                    </h1>
                    <p className={classes.p}>
                        The NSU Management System is  meant for helping the institution. This website will help to run the daily administrative and academic operations smoothly from afar.It is created for the people who facilitate the institute.
                    </p>
                    <button type="submit" className={classes.button}>
                        Details
                
                    </button>
                </div>
                <div className={classes.col}>
                <Link className={classes.nounderline} to="/kashundiuserpage">
                    <button type="submit" className={classes.button}>
                        <div className={classes.board1}>
                            <h5 className={classes.h5}>Kashundi</h5>
                            <p className={classes.p}><b>Get the food you love from Kashundi</b>
                            </p>
                        </div>
                    </button>
                    </Link>
                    <Link className={classes.nounderline} to="/spacebookpage">
                        <button type="submit" className={classes.button}>
                            <div className={classes.board3}>
                                <h5 className={classes.h5}>Booking</h5>
                                <p className={classes.p}><b>You are allowed to take up space </b>
                                </p>
                            </div>
                        </button>
                    </Link>
                    
                    <Link className={classes.nounderline} to="/bookingpage">
                        <button type="submit" className={classes.button}>
                            <div className={classes.board4}>
                                <h5 className={classes.h5}>Shuttle</h5>
                                <p className={classes.p}><b>The shuttle guide to life at NSU </b>
                                </p>
                            </div>
                        </button>
                    </Link>

                    <Link className={classes.nounderline} to="/lmsdashboardfaculty">
                        <button type="submit" className={classes.button}>
                            <div className={classes.board5}>
                                <h5 className={classes.h5}>LMS</h5>
                                <p className={classes.p}><b>Set your own learning pace</b>
                                </p>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default Facultydashboardpage;
