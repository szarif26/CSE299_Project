import React, { useState } from "react";
import classes from "./Item.module.css";

const additem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [itemId, setitemId] = useState("");

  const handleAddItem = async () => {
    console.warn(name, price, category, itemId);
    let result = await fetch("http://localhost:4000/additem", {
      method: "post",
      body: JSON.stringify({ name, price, category, itemId }),
      headers: {
        "content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
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
        <button onClick={handleAddItem} className={classes.button}>
          Add Item
        </button>
      </div>
    </div>
  );
};

export default additem;
