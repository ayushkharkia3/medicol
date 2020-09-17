import React from "react";
import classes from "./Home.module.css";
import Cards from "../../components/UI/flashCards/Cards";
import MenuItem from '../../components/UI/menuItem/MenuItem';

const Home = () => {
  return (
    <div className={classes.homeContainer}>
      <section className={classes.CardsSection}>
        <Cards
          mainTitle="1"
          subTitle="1"
          topic="New Patients"
          bgColor="#487EB0"
        />
        <Cards
          mainTitle="1"
          topic="New Patients"
          bgColor="#D63031"
        />
        <Cards
          mainTitle="1"
          subTitle="1"
          topic="New Patients"
          bgColor="#FAC42F"
        />
      </section>
      <section className={classes.menuContainer}>
            <MenuItem title="Patients"/>
            <MenuItem title="Patients"/>
            <MenuItem title="Patients"/>
            <MenuItem title="Patients"/>
            <MenuItem title="Patients"/>
            <MenuItem title="Patients"/>
            <MenuItem title="Patients"/>
      </section>
    </div>
  );
};

export default Home;
