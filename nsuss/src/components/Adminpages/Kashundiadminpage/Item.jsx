import React, { useState } from "react";
import { useEffect } from "react";
import classes from "./Item.module.css";
const Item = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems();
  }, []);
  const getItems = async () => {
    let result = await fetch('http://localhost:4000/items');
    result = await result.json();
    setItems(result);
  }

  console.warn(items);
  return (

<div className={classes.background1}>
<div className={classes.container2}>
    <div className={classes.Item_List}>
      <h1 className={classes.heading}>Item List</h1>
      <ul className={classes.box}>
          <li>s.number</li>
        <li>ID</li>
        <li>Name</li>
        <li>Price</li>
        <li>Quantity</li>
        <li>Category</li>
      </ul>
      {
        items.map((items,index)=>
        <ul key={items} >
          <li>{index+1}</li>
        <li>{items.itemId}</li>
        <li>{items.name}</li>
        <li>{items.price}</li>
        <li>{items.quantity}</li>
        <li>{items.category}</li>
      </ul>
        )
      }
    </div>
    </div>
    </div>


  );
}

export default Item;