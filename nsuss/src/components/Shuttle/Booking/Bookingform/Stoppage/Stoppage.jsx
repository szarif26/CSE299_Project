import React from "react";
import classes from "./Stoppage.module.css";

const Stoppage = () => {
  return (
    <div className={classes.form}>
      <label className={classes.formlabel}>Stoppage</label>
      <select name="time_slot">
        <option value="" disabled selected hidden>
          Select a Stoppage
        </option>
        <option value="Uttara North">Uttara North</option>
        <option value="Uttara Middle">Uttara Middle</option>
        <option value="Uttara South">Uttara South</option>
        <option value="Airport">Airport</option>
        <option value="Khilkhet">Khilkhet</option>
        <option value="Kuril">Kuril</option>
      </select>
    </div>
  );
};

export default Stoppage;
