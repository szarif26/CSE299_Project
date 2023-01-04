import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import classes from "./Cart.module.css";

const Cart = () => {
  const [userid, setUserid] = useState(JSON.parse(window.localStorage.getItem("user")).userid);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [itemId, setitemId] = useState("");
  const [quantity, setquantity]= useState("");
  const [status, setstatus]= useState("To Cart");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    getProductDetails()
  },[])
  const getProductDetails= async ()=>{
    console.warn(params)
    let result = await fetch(`http://localhost:4000/item/${params.itemId}`);
    result=await result.json();
    console.warn(result)
    setName(result.name)
    setPrice(result.price)
    setCategory(result.category)
    setitemId(result.itemId)
    
  }

  const handlecart = async () => {
    console.warn ( userid, name,price,category,itemId,quantity);
    let result= await fetch("http://localhost:4000/cart",{
        method:'post',
        body:JSON.stringify({userid,name,price,category,itemId,quantity,status}),
        headers:{
            'Content-Type':'Application/json'
        }
    });
        result = await result.json()
        console.warn(result)
        if(result){
            alert("Added to Cart");
        navigate  ("/Kashundiuserpage");
        }
  };
  return (
    <div className={classes.background}>
      <div className={classes.container1}>
        <h1 className={classes.h1}> Order Item </h1>
        <select hidden onChange={(e) => setUserid(e.target.value)}
                value={userid} ></select>
        <input
          type="text"
          placeholder="Enter item name"
          className={classes.inputbox}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="Enter item Price"
          className={classes.inputbox}
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <input
          type="text"
          placeholder="Enter item Categoty"
          className={classes.inputbox}
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
       
        <input
          type="text"
          placeholder="Enter item ID"
          className={classes.inputbox}
          onChange={(e) => setitemId(e.target.value)}
          value={itemId}
        />
         <input
        type="text"
        placeholder="Enter Item Quantity"
        className={classes.inputbox}
        onChange={(e) => setquantity(e.target.value)}
        value={quantity}
        ></input>
         <input
         hidden
        type="text"
        placeholder="Enter Item Quantity"
        className={classes.inputbox}
        onChange={(e) => setstatus(e.target.value)}
        value={status}
        ></input>
       
        <button onClick={handlecart} className={classes.button}>
         Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
