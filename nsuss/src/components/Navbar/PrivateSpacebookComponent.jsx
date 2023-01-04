import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateSpacebookComponents=()=>{
    const userID = JSON.parse(window.localStorage.getItem("user")).userid;
    let auth=false;
    if(userID==="spacebook"){
        auth=true;
    }
    else auth=false;
    return auth ? <Outlet/> : <Navigate to="/"/>
}

export default PrivateSpacebookComponents;
