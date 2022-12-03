import React from "react";
import { Link } from "react-router-dom";
import classes from "./Shuttleadminpage.module.css";
const Shuttleadminpage = () => {
  return (
    <div className={[classes.background, classes.container].join(" ")}>
      <div className={classes.row}>
        <div className={classes.col}>
          <Link className={classes.nounderline} to="/trips">
            <button type="submit" className={classes.button}>
              <div className={classes.board1}>
                <h5 className={classes.h5}>Trips</h5>
                <p className={classes.p}>
                  <b></b>
                </p>
              </div>
            </button>
          </Link>
          <Link className={classes.nounderline} to="/routes">
            <button type="submit" className={classes.button}>
              <div className={classes.board2}>
                <h5 className={classes.h5}>Routes</h5>
                <p className={classes.p}>
                  <b></b>
                </p>
              </div>
            </button>
          </Link>
          <Link className={classes.nounderline} to="/vehiclepage">
            <button type="submit" className={classes.button}>
              <div className={classes.board3}>
                <h5 className={classes.h5}>Vehicles</h5>
                <p className={classes.p}>
                  <b> </b>
                </p>
              </div>
            </button>
          </Link>
        </div>
        <div className={classes.col}>
          <h1 className={classes.h1}>Shuttle</h1>
          <p className={classes.p}>Admin Dashboard.</p>
          <button type="submit" className={classes.button}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shuttleadminpage;
