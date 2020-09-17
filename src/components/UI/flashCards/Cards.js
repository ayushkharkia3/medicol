import React from "react";
import classes from "./Cards.module.css";

const Cards = ({ mainTitle, subTitle, topic, bgColor }) => {
  return (
    <div className={classes.cardContainer} style={{ backgroundColor: bgColor}}>
      <h1>
        {mainTitle} 
        {subTitle && <span> ({subTitle})</span>}
      </h1>
      <p>{topic}</p>
    </div>
  );
};

export default Cards;
