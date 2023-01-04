import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateShuttleComponents=()=>{
    const userID = JSON.parse(window.localStorage.getItem("user")).userid;
    let auth=false;
    if(userID==="shuttle"){
        auth=true;
    }
    else auth=false;
    return auth ? <Outlet/> : <Navigate to="/"/>
}

export default PrivateShuttleComponents;
