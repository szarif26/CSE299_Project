import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateKashundiComponents=()=>{
    const userID = JSON.parse(window.localStorage.getItem("user")).userid;
    let auth=false;
    if(userID==="kashundi"){
        auth=true;
    }
    else auth=false;
    return auth ? <Outlet/> : <Navigate to="/"/>
}

export default PrivateKashundiComponents;
