import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import classes from "./Updatestatus.module.css";

const Updatestatus = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [itemId, setitemId] = useState("");
  const [quantity, setquantity]= useState("");
  const [status, setstatus]= useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    getProductDetails()
  },[])
  const getProductDetails= async ()=>{
    console.warn(params)
    let result = await fetch(`http://localhost:4000/cart/${params.itemId}`);
    result=await result.json();
    console.warn(result)
    setName(result.name)
    setPrice(result.price)
    setCategory(result.category)
    setitemId(result.itemId)
    setquantity(result.quantity)
  }

  const handleUpdate = async () => {
    console.warn(name,price,category,itemId,quantity,status);
    let result= await fetch(`http://localhost:4000/updatestatus/${params.itemId}`,{
        method:'Put',
        body:JSON.stringify({name,price,category,itemId,quantity,status}),
        headers:{
            'Content-Type':'Application/json'
        }
    });
        result = await result.json()
        console.warn(result)
        if(result){
        navigate  ("/vieworderlist");
        }
  };
  return (
    <div className={classes.background}>
      <div className={classes.container1}>
        <h1 className={classes.h1}> Update Status </h1>
      
        <select onChange={(e) => setstatus(e.target.value)}
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
              <option className={classes.formselect} value="Ready">
                Preparing
              </option>
              <option className={classes.formselect} value="Delivered">
                Ready
              </option>
              <option className={classes.formselect} value="Delivered">
                Delivered
              </option>
            </select>
         
       
        <button onClick={handleUpdate} className={classes.button}>
          Update Status
        </button>
      </div>
    </div>
  );
};

export default Updatestatus;
