import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import classes from './RenderCafe.module.css';

export default function RenderCafe() {
  const [cafes, setCafes] = useState([]);

  let history = useHistory();


  async function fetchCafesFromServer() {
    const result = await axios.get('http://localhost:8050/cafes');
    console.log(result);
    setCafes(result.data);
}

useEffect(() => {
    fetchCafesFromServer();
}, []);

const handleClick =() => {
  
}

return (
  <div>
    { cafes.map((cafe) => (
          <div  className={classes.eachCafe} onClick={() => {
            history.push('mycafe' + '/' + cafe._id)
          }}>
          <img src={cafe.selectedFile} style={{width: '50%'}}/>
     <p>
        Review: <b>{cafe.district}</b> <br />
        Address: {cafe.street_name} <br />
        Contact: {cafe.description} <br />
     </p>
       </div>
    
    ))}
    </div>
)

};

