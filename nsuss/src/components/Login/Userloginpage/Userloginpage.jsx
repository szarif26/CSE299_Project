import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Userloginpage.module.css";

const UserloginPage = () => {
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/dashboard");
    }
  }, []);
  const handleLogin = async () => {
    let result = await fetch("http://localhost:4000/login", {
      method: "post",
      body: JSON.stringify({ userid, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);

      if(result.name){
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result));
        const id = JSON.parse(window.localStorage.getItem("user")).userid;
        const sid = parseInt(JSON.parse(window.localStorage.getItem("user")).userid);
        if(id==='kashundi'){
          navigate("/kashundiadminpage");
        }
        else if (id==='shuttle'){
          navigate("/shuttleadminpage");
        }
        else if (id==='spacebook'){
          navigate("/spacebookadminpage");
        }
        else if (id==='printzone'){
          navigate("/printzoneadminpage");
        }
        else if(sid > 1000000000 && sid < 9999999999){
          navigate("/dashboardpage");
        }
        else{
          navigate("/facultydashboardpage");
        }
      }
      
     else {
      alert("Wrong ID or Password");
    }
  };

  return (
    <div className={[classes.background, classes.container1].join(" ")}>
      <div className={classes.container2}>
        <div className={classes.textcenter}>
          <h2 className={classes.h2}>Welcome User</h2>
          <form>
            <label className={classes.label}>
              User ID : <tab></tab>
              <input
                className={classes.inputbox}
                type="text"
                placeholder="Enter ID"
                onChange={(e) => setUserId(e.target.value)}
                value={userid}
              />
            </label>
            <br></br>
            <label className={classes.label}>
              Password : <tab></tab>
              <input
                className={classes.inputbox}
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </label>
            <br></br>
            <br></br>
            <button
              onClick={handleLogin}
              type="button"
              className={classes.loginbtn}
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserloginPage;
