import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import classes from "./Order.module.css";

const Order = () => {
    const [userid, setUserid] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [itemId, setitemId] = useState("");
  const [quantity, setquantity]= useState("");
  const [status, setstatus]= useState("Ordered");

  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    getProductDetails()
  },[])
  const getProductDetails= async ()=>{
    console.warn(params)
    let result = await fetch(`http://localhost:4000/cart/${params.userid}`);
    result=await result.json();
    console.warn(result)
    
    
  }

  const handleUpdate = async () => {
    console.warn(status);
    let result= await fetch(`http://localhost:4000/order/${params.userid}`,{
        method:'Put',
        body:JSON.stringify({status}),
        headers:{
            'Content-Type':'Application/json'
        }
    });
        result = await result.json()
        console.warn(result)
        if(result){
        navigate  ("/Viewcart");
        }
  };
  return (
    <div className={classes.background}>
      <div className={classes.container1}>
        <h1 className={classes.h1}> Confirmed Order </h1>
        <select hidden onChange={(e) => setUserid(e.target.value)}
                value={userid} ></select>
        
   
       
        
       
        <button onClick={handleUpdate} className={classes.button}>
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default Order;
