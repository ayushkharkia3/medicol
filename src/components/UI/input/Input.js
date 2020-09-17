import React from "react";
import classes from "./Input.module.css";

const Input = ({ type, placeholder, simple }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={simple ? null : classes.input}
    />
  );
};

export default Input;
