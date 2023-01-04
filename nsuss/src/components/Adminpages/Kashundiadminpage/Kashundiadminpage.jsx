import React from "react";
import { Link } from "react-router-dom";
import classes from "./Kashundiadminpage.module.css";
const Kashundiadminpage = () => {

  return (
    
      <div className={[classes.background, classes.container].join(" ")}>
        <div className={classes.row}>
            <div className={classes.col}>
                <h1 className={classes.h1}>
                 Kashundi  
                </h1>
                <p className={classes.p}>
                    Admin Dashboard.
                </p>
                <button type="submit" className={classes.button}>
                    Details

                </button>
            </div>
            <div className={classes.col}>
            <Link className={classes.nounderline} to="/Item">
            <button type="submit" className={classes.button}>
                <div className={classes.board1}>
                    <h5 className={classes.h5}>Items</h5>
                    <p className={classes.p}><b></b>
                    </p>
                </div>
                </button>
                </Link>
                <Link className={classes.nounderline} to="/Additem">
                <button type="submit" className={classes.button}>
                <div className={classes.board2}>
                    <h5 className={classes.h5}>Add Item</h5>
                    <p  className={classes.p}><b></b> 
                    </p>
                </div>
                </button>
                </Link>
                <Link className={classes.nounderline} to="/Updateitem">
                <button type="submit" className={classes.button}>
                <div className={classes.board3}>
                    <h5 className={classes.h5}>Update Items</h5>
                    <p className={classes.p}><b> </b>
                    </p>
                </div>
                </button>
                </Link>
                <Link className={classes.nounderline} to="/Vieworderlist">
                <button type="submit" className={classes.button}>
                <div className={classes.board3}>
                    <h5 className={classes.h5}>View Order-list</h5>
                    <p className={classes.p}><b> </b>
                    </p>
                </div>
                </button>
                </Link>
              
                
               
            </div>
        </div>
        </div>
  
    );
};

export default Kashundiadminpage;