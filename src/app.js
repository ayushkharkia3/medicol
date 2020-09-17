import React from 'react';
import Header from './components/header/Header';
import './app.css';
import Home from './screens/homeScreen/Home';
import NewPatient from './screens/newPatientScreen/NewPatient';
import Visits from './screens/visitsScreen/Visit';
import Bill from './screens/BillScreen/Bill';


const App = ()=>{
    return (
        <>
        <Header />
        {/* <Home /> */}
        {/* <NewPatient /> */}
        {/* <Visits /> */}
        <Bill />
        </>
    )
}

export default App;