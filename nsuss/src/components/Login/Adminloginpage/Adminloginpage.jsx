import React from "react";
import classes from "./Adminloginpage.module.css";
import Navbar from "../../Navbar/Navbar";

function AdminloginPage() {
  return (
    <div>
      <Navbar/>
    <div className={[classes.background, classes.container1].join(" ")}>
      <div className={classes.container2}>
        <div className={classes.textcenter}>
          <h2 className={classes.h2}>Welcome</h2>
          <form>
            <label className={classes.label}>
              Admin ID : <tab></tab>
              <input className={classes.inputbox} type="text" name="Admin ID" />
            </label>
            <br></br>
            <label className={classes.label}>
              Password : <tab></tab>
              <input
                className={classes.inputbox}
                type="text"
                name="Admin Password"
              />
            </label>
            <br></br>
            <br></br>
            <button type="submit" className={classes.loginbtn}>
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AdminloginPage;
