import React from "react";
import classes from "./Userloginpage.module.css";

function UserloginPage() {
  return (
    <div className={[classes.background, classes.container1].join(" ")}>
      <div className={classes.container2}>
        <div className={classes.textcenter}>
          <h2 className={classes.h2}>Welcome</h2>
          <form>
            <label className={classes.label}>
              User ID : <tab></tab>
              <input className={classes.inputbox} type="text" name="User ID" />
            </label>
            <br></br>
            <label className={classes.label}>
              Password : <tab></tab>
              <input
                className={classes.inputbox}
                type="text"
                name="User Password"
              />
            </label>
            <br></br>
            <br></br>
            <button className={classes.loginbtn}>Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserloginPage;
