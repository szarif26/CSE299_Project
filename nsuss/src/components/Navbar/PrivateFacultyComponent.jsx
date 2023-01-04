import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateFacultyComponents=()=>{
    const userID = parseInt(JSON.parse(window.localStorage.getItem("user")).userid);
    const facID = JSON.parse(window.localStorage.getItem("user")).userid;
    let studAuth=false;
    if((userID>1000000000 && userID<9999999999) || facID.length===3||facID.length===4){
        studAuth=true;
    }
    else studAuth=false;
    return studAuth ? <Outlet/> : <Navigate to="/"/>
}

export default PrivateFacultyComponents;
