import React from "react";
import classes from "./InfoCard.module.css";
import Table from "../table/Table";

const InfoCard = ({first, second, third, fourth}) => {
  return (
    <div className={classes.infoCardContainer}>
      <p>Dates: 01-sept-20 - 08-sept-20</p>
      <Table first={first} second={second} third={third} fourth={fourth}/>
    </div>
  );
};

export default InfoCard;
