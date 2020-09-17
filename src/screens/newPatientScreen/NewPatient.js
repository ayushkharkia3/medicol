import React from 'react';
import classes from './NewPatient.module.css';
import InfoCard from '../../components/UI/infoCard/InfoCard';

const NewPatient = ()=>{
    return (
        <InfoCard first="Id"
        second="second"
        third="Gender/Age"
        fourth="Creation Date"/>
    );
}

export default NewPatient;