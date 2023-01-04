import React, { useState } from "react";
import classes from "./Additem.module.css";
import {Link} from "react-router-dom";

const additem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [itemId, setitemId] = useState("");
  const [quantity, setquantity]= useState("");

  const handleAddItem = async () => {
    console.warn(name, price, category, itemId, quantity);
    let result = await fetch("http://localhost:4000/additem", {
      method: "post",
      body: JSON.stringify({ name, price, category, itemId, quantity }),
      headers: {
        "content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    alert("Successfully Added Your Food");
  };
  return (
    <div className={classes.background}>
      <div className={classes.container1}>
        <h1 className={classes.h1}> Add New Item </h1>
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
       <Link  className={classes.nounderline} to={"/Item"}>
      
        <button onClick={handleAddItem} className={classes.button}>
          Add Item
        </button>
        </Link>
      </div>
    </div>
  );
};

export default additem;
