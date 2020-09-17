import React from "react";
import classes from "./Bill.module.css";
import Input from "../../components/UI/input/Input";
import Button from "../../components/UI/button/Button";

const Bill = () => {
  return (
    <div className={classes.container}>
      <div className={classes.userInfoSection}>
        <Input type="text" placeholder="Search Patient or Add New" />
        <div className={classes.splitInputs}>
          <Input type="number" placeholder="Mobile No." />
          <Input type="email" placeholder="Email ID" />
        </div>
      </div>
      <div className={classes.userInfoSection}>
        <h2>Treatment:</h2>
        <div className={classes.inputgroup}>
          <Input type="text" simple />
          <Button>add</Button>
        </div>
        <h2>Medicine:</h2>
        <div className={classes.inputgroup}>
          <Input type="text" simple />
          <Button>add</Button>
        </div>
        <div className={classes.summaryContainer}>
          <div className={classes.summaryTitle}>
            <p>Fees: </p><p>0</p>
          </div>
          <div className={classes.summaryTitle}>
          <p>Discount: </p> <p>0</p>
          </div>
          <div className={classes.summaryTitle}>
            <p className={classes.borderBottom}></p>
          </div>
          <div className={classes.summaryTitle}>
            <p>Total: </p><p>0</p>
          </div>
        </div>
      </div>
      <Button background="red" color="white">Submit</Button>
    </div>
  );
};

export default Bill;
