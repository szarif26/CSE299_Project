import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateComponents=()=>{
    const auth = JSON.stringify({userid});
    return auth ? <Outlet/> : <Navigate to="/"/>
}

export default PrivateComponents;
