import React from "react";
import classes from "./MenuItem.module.css";

const MenuItem = ({title}) => {
  return (
    <div className={classes.itemContainer}>
      <img src="./assests/booking.png" alt="menu image" />
      <p>{title}</p>
    </div>
  );
};

export default MenuItem;
