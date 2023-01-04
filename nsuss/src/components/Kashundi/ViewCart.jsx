import React, { useEffect, useState } from "react";
import classes from "./ViewCart.module.css";
import {Link} from "react-router-dom";




const ViewCart = () => {


  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCart();
  }, []);

  const key = JSON.parse(window.localStorage.getItem("user")).userid;
  


  const getCart = async () => {
    let result = await fetch(`http://localhost:4000/viewcart/${key}`);

    result = await result.json();
    setCart(result);
  }
  console.warn(cart);
  var total=0;
var userid= 0;

  return (


    <div className={classes.Cart_List}>
      <div className={classes.background1}>
        <div className={classes.container2}>
          <h1 className={classes.heading}>Order List</h1>
          <ul className={classes.ul}>
          <li  className={classes.li1}>#</li>
            <li  className={classes.li}>Name</li>
            <li  className={classes.li1}>Price</li>
            <li className={classes.li}>Category</li>
            <li className={classes.li}>Quantity</li>
            <li className={classes.li1}>Status</li>
            <li className={classes.li}>Total</li>
            
         
           
          </ul>
          {
            cart.map((cart, index) =>
              <ul key={cart} className={classes.ul}>
                <li className={classes.li1}>{index + 1}</li>
                <li className={classes.li}>{cart.name}</li>
                <li className={classes.li1}>{cart.price}Tk</li>
                <li className={classes.li}>{cart.category}</li>
                <li className={classes.li}>{cart.quantity}</li>
                <li className={classes.li1}>{cart.status}</li>
                <li className={classes.li}>{cart.price* cart.quantity}Tk</li>
                <li hidden>  {userid=cart.userid}</li>
                <li hidden className={classes.li}>{total=total+(cart.price* cart.quantity)}</li>
              </ul>
             
           
            )
            
          }
          <ul className={classes.ul}>
           <li className={classes.li3}>Total</li>
        <li className={classes.li2}> {total}Tk</li>
        </ul>


        <Link className={classes.nounderline} to={"/Order/" +userid} >
               <button className={classes.btn}>order</button>
               </Link>
        </div>
      </div>
    </div>

  );
}

export default ViewCart;