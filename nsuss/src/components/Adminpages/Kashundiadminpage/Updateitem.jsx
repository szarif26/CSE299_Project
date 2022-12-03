import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Item.module.css";
const Updateitem = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems();
  }, []);
  const getItems = async () => {
    let result = await fetch('http://localhost:4000/items');
    result = await result.json();
    setItems(result);
  }

  const deleteitems = async (itemId) => {
    console.warn(itemId)
    let result = await fetch(`http://localhost:4000/items/${itemId}`, {
      method: "Delete"
    });
    result = await result.json();
    if (result) {
      getItems();
    }
  }
  return (


    <div className={classes.Item_List}>
      <h1>Delete Item</h1>
      <ul >
        <li>s.number</li>
        <li>ID</li>
        <li>Name</li>
        <li>Price</li>
        <li>Quantity</li>
        <li>Category</li>
        <li>Delete|Update</li>
      </ul>
      {
        items.map((items, index) =>
          <ul key={items.itemId} >
            <li>{index + 1}</li>
            <li>{items.itemId}</li>
            <li>{items.name}</li>
            <li>{items.price}</li>
            <li>{items.quantity}</li>
            <li>{items.category}</li>
            <li>
              <button onClick={() => deleteitems(items.itemId)}>Delete</button>
              <Link className={classes.nounderline} to={"/Update/"+items.itemId }>
                <button type="submit" >
                   Update
                </button>
                </Link>
            </li>

          </ul>
        )
      }
    </div>


  );
}

export default Updateitem;