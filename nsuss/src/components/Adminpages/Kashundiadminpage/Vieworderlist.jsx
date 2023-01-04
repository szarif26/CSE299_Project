import React, { useEffect, useState } from "react";
import classes from "./Vieworderlist.module.css";
import {Link} from "react-router-dom";
const Vieworderlist = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    let result = await fetch(`http://localhost:4000/viewcart`);

    result = await result.json();
    setCart(result);
  }
  const deletecart = async (itemId) => {
    console.warn(itemId)
    let result = await fetch(`http://localhost:4000/cart/${itemId}`, {
      method: "Delete"
    });
    result = await result.json();
    if (result) {
      getCart();
    }
  }
  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:4000/searchorder/${key}`);
      result = await result.json();
      if (result) {
        setCart(result)
      }
    } else {
      getCart();
    }
  }

  return (


    <div className={classes.Cart_List}>
      <div className={classes.background1}>
        <div className={classes.container2}>
          <h1 className={classes.heading}>Order List</h1>
          <input
          type="text"
          placeholder="Search Order by Name/Price/Status "
          className={classes.inputboxs}
          onChange={searchHandle}
        />
          <ul className={classes.ul}>
          <li  className={classes.li1}>#</li>
            <li  className={classes.li}>Name</li>
            <li  className={classes.li1}>Price</li>
            <li className={classes.li}>Category</li>
            <li className={classes.li1}>Quantity</li>
            <li className={classes.li1}>Status</li>
            <li className={classes.li1}>Total</li>
            <li className={classes.li}>Order Status</li>
            <li className={classes.li1}>Delete</li>
         
           
          </ul>
          {
            cart.map((cart, index) =>
              <ul key={cart} className={classes.ul}>
                <li className={classes.li1}>{index + 1}</li>
                <li className={classes.li}>{cart.name}</li>
                <li className={classes.li1}>{cart.price}</li>
                <li className={classes.li}>{cart.category}</li>
                <li className={classes.li1}>{cart.quantity}</li>
                <li className={classes.li1}>{cart.status}</li>
                <li className={classes.li1}>{cart.price* cart.quantity}</li>
                <li  className={classes.li}>
                <Link className={classes.nounderline} to={"/Updatestatus/" + cart.itemId}>
                    <button className={classes.btn} type="submit" >
                      Update Status
                    </button>
                  </Link>
                </li>
                <li  className={classes.li1}>
                <button className={classes.btn} onClick={() => deletecart(cart.itemId)}>Delete</button>
                </li>
               
              
              </ul>
             
           
            )
            
          }
         


    
               
               
        </div>
      </div>
    </div>

  );
}

export default Vieworderlist;