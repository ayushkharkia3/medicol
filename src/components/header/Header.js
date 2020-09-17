import React from 'react';
import classes from './Header.module.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const size = {
    fontSize: '24px'
}


const Header = ()=>{
    return (
        <div className={classes.headerContainer}>
            <MenuIcon style={size}/>
            <div className={classes.heading}>
                <h1>Clinicia</h1>
            </div>
            <SearchIcon style={size}/>
        </div>
    )
}

export default Header;