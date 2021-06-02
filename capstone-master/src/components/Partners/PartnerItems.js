import React from 'react';
import Text from '../Text/Text.js';
import { cafe } from "../../data.json";
import classes from './PartnerItems.module.css';

const partnerItems = () => (
<div  className={classes.PartnerAll}>
  <Text head="Our Partner Restaurtants and Cafes" par="We work with more than 50 restaurants and cafes located in Yerevan!" />
   <div className={classes.PartnerItems}>
        {cafe.slice(0,3).map(cafe => (
          <div className={classes.eachBox}>
            <img src={cafe.logo} style={{width: '50%'}}/>
            <p>{cafe.name} <br />
               Review: <b>{cafe.review}</b> <br />
               Address: {cafe.address} <br />
               Contact: {cafe.phone}</p>
          </div>
        ))}
    </div>
    <a href="/filter" className={classes.button1}>View More</a>
  </div>
)

export default partnerItems;
