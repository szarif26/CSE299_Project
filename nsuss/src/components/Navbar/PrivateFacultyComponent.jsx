import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateFacultyComponents=()=>{
    const userID = JSON.parse(window.localStorage.getItem("user")).userid;
    let auth=false;
    if(${userID.length}===3||${userID.length}===4){
        auth=true;
    }
    else auth=false;
    return auth ? <Outlet/> : <Navigate to="/"/>
}

export default PrivateFacultyComponents;
