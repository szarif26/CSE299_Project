import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import classes from "./UpdateSB.module.css";

const UpdateSB = () => {

  const [status, setStatus]= useState("");
  const [comment, setComment]= useState("");
  const [Bookingid,setBookingid]= useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    getSpacebookDetails()
  },[])
  const getSpacebookDetails= async ()=>{
    console.warn(params)
    let result = await fetch(`http://localhost:4000/spacebook/${params.Bookingid}`);
    result=await result.json();
    console.warn(result)
  }

  const handleUpdate = async () => {
    console.warn(Bookingid,status,comment);
    let result= await fetch(`http://localhost:4000/Updatespacebook/${params.Bookingid}`,{
        method:'Put',
        body:JSON.stringify({status,comment}),
        headers:{
            'Content-Type':'Application/json'
        }
    });
        result = await result.json()
        console.warn(result)
        if(result){
        navigate  ("/Spacebookadminpage");
        }
  };
  return (
    <div className={classes.background}>
      <div className={classes.container1}>
        <h1 className={classes.h1}> Update Information </h1>
        <select onChange={(e) => setStatus(e.target.value)}
                value={status} className={classes.inputbox} name="status">
              <option
                className={classes.formselect}
                value=""
                disabled
                selected
                hidden
              >
                Select an option
              </option>
              <option className={classes.formselect} value="Approved">
                Approve
              </option>
              <option className={classes.formselect} value="Rejected">
                Reject
              </option>
            </select>
        <input
        type="text"
        placeholder="Enter Comment"
        className={classes.inputbox}
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        ></input>
       
        <button onClick={handleUpdate} className={classes.button}>
          Update Information
        </button>
      </div>
    </div>
  );
};

export default UpdateSB;
