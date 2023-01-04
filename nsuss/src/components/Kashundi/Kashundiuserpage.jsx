import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Kashundiuserpage.module.css";
const Kashundiuserpage = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems();
  }, []);
  const getItems = async () => {
    let result = await fetch('http://localhost:4000/items');
    result = await result.json();
    setItems(result);
  }
  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:4000/search/${key}`);
      result = await result.json();
      if (result) {
        setItems(result)
      }
    } else {
      getItems();
    }
  }

  return (

    <div className={classes.background1}>
      <div className={classes.container2}>
      <div className={classes.Item_List}>
        <h1 className={classes.heading}>Available Food</h1>

        <input
          type="text"
          placeholder="Search Food "
          className={classes.inputboxs}
          onChange={searchHandle}
        />
        <Link className={classes.nounderline} to={"/ViewCart"}>
                  <button type="submit" className={classes.button}>
                    View Cart
                  </button>
                </Link>
        <ul className={classes.ul}>
          <li className={classes.li}>s.number</li>

          <li className={classes.li}>Name</li>
          <li className={classes.li}>Price</li>
          <li className={classes.li}>Quantity</li>
          <li className={classes.li}>Category</li>
          <li className={classes.li}>Order</li>
        </ul>
        {
          items.map((items, index) =>
            <ul key={items.itemId} className={classes.ul} >
              <li className={classes.li}>{index + 1}</li>

              <li className={classes.li}>{items.name}</li>
              <li className={classes.li}>{items.price}Tk</li>
              <li className={classes.li}>{items.quantity}</li>
              <li className={classes.li}>{items.category}</li>
              <li className={classes.li}>

                <Link className={classes.nounderline} to={"/Cart/" + items.itemId}>
                  <button type="submit" className={classes.button}>
                    Add to Cart
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

export default Kashundiuserpage;