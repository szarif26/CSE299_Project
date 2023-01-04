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
      <ul className={[classes.box, classes.ul]}>
        <li className={classes.li}>#</li>
        <li className={classes.li}>ID</li>
        <li className={classes.li}>Name</li>
        <li className={classes.li}>Price</li>
        <li className={classes.li}>Quantity</li>
        <li className={classes.li}>Category</li>
      </ul>
      {
        items.map((items,index)=>
        <ul className={[classes.box, classes.ul]} key={items} >
        <li className={classes.li}>{index+1}</li>
        <li className={classes.li}>{items.itemId}</li>
        <li className={classes.li}>{items.name}</li>
        <li className={classes.li}>{items.price}Tk</li>
        <li className={classes.li}>{items.quantity}</li>
        <li className={classes.li}>{items.category}</li>
      </ul>
        )
      }
    </div>
    </div>
    </div>


  );
}

export default Item;