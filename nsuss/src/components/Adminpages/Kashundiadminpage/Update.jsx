import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import classes from "./UpdateItem.module.css";

const Update = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [itemId, setitemId] = useState("");
  const [quantity, setquantity]= useState("");
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
    setquantity(result.quantity)
  }

  const handleUpdate = async () => {
    console.warn(name,price,category,itemId,quantity);
    let result= await fetch(`http://localhost:4000/item/${params.itemId}`,{
        method:'Put',
        body:JSON.stringify({name,price,category,itemId,quantity}),
        headers:{
            'Content-Type':'Application/json'
        }
    });
        result = await result.json()
        console.warn(result)
        if(result){
        navigate  ("/updateitem");
        }
  };
  return (
    <div className={classes.background}>
      <div className={classes.container1}>
        <h1 className={classes.h1}> Update Item </h1>
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
       
        <button onClick={handleUpdate} className={classes.button}>
          Update Item
        </button>
      </div>
    </div>
  );
};

export default Update;
