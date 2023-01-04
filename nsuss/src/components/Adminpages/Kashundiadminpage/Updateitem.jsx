import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./UpdateItem.module.css";
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

    <div className={classes.background}>
      <div className={classes.container1}>
        <div className={classes.Item_List}>
          <h1 className={classes.h11}>Update and Delete Item</h1>
          <ul className={classes.ul}>
            <li className={classes.li1}>#</li>
            <li className={classes.li1}>ID</li>
            <li className={classes.li}>Name</li>
            <li className={classes.li1}>Price</li>
            <li className={classes.li1}>Quantity</li>
            <li className={classes.li}>Category</li>
            <li className={classes.li2}>Delete|Update</li>
          </ul>
          {
            items.map((items, index) =>
              <ul className={classes.ul} key={items.itemId} >
                <li className={classes.li1}>{index + 1}</li>
                <li className={classes.li1}>{items.itemId}</li>
                <li className={classes.li}>{items.name}</li>
                <li className={classes.li1}>{items.price}</li>
                <li className={classes.li1}>{items.quantity}</li>
                <li className={classes.li}>{items.category}</li>
                <li className={classes.li2}>
                  <button className={classes.btn} onClick={() => deleteitems(items.itemId)}>Delete</button>
                  <Link className={classes.nounderline} to={"/Update/" + items.itemId}>
                    <button className={classes.btn} type="submit" >
                      Update
                    </button>
                  </Link>
                </li>

              </ul>
            )
          }
        </div>
      </div>
    </div>



  );
}

export default Updateitem;