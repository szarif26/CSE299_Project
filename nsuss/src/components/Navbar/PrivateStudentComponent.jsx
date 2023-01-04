import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateStudentComponents=()=>{
    const userID = parseInt(JSON.parse(window.localStorage.getItem("user")).userid);
    let studAuth=false;
    if(userID>1000000000 && userID<9999999999){
        studAuth=true;
    }
    else studAuth=false;
    return studAuth ? <Outlet/> : <Navigate to="/"/>
}

export default PrivateStudentComponents;
