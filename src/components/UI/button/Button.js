import React from 'react';
import classes from './Button.module.css';

const Button = ({children, background = 'transparent', color = 'black'})=>{
    return <button className={classes.button} style={{backgroundColor: background, color: color}}>{children}</button>
}

export default Button;