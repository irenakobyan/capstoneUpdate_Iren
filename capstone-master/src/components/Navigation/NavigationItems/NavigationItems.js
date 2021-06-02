import React from 'react';
import {useEffect, useState} from "react";
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';
import logo from '../../../assets/logo.png';
import {  NavLink } from 'react-router-dom';
import axios from 'axios';

const token = localStorage.getItem("token");

if (token) {
  axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
}

function NavigationItems(token)  {

  const [user] = useState(localStorage.getItem("token"));
  
  return(

  <div>
    <ul className={classes.NavigationItems}>
    <NavigationItem><NavLink to="/">Home</NavLink></ NavigationItem>
    <NavigationItem><NavLink to="/whoweare"> Who we are </NavLink></ NavigationItem>
    <NavigationItem><NavLink to="/filter"> Restaurants & Cafes </NavLink></ NavigationItem>

    <img src={logo}  alt="Logo" />

    { !user
       ? ( 
         <>
        <div>
        <NavigationItem><NavLink to="/signup"> Sign Up blah blah </NavLink> </ NavigationItem>
        <NavigationItem><NavLink to="/login"> Login </NavLink> </ NavigationItem>
        <NavigationItem><NavLink to="/contact"> Contact </NavLink> </ NavigationItem>
        </div>
        </>
       )
: 
(
     <div>
     <NavigationItem><NavLink to="/profile"> My profile </NavLink> </ NavigationItem>
     <NavigationItem><NavLink to="/contact"> Contact </NavLink> </ NavigationItem>
     <NavigationItem><NavLink to="/signout"> Log Out </NavLink> </ NavigationItem>
     </div>
)

    }

    
    </ul>

  </div>
  )
}

export default NavigationItems;
