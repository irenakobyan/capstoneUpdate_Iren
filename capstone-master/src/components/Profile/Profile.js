import React, { useState} from 'react';
import classes from "./Profile.module.css";
import axios from "axios";
import Login from '../Login/Login.js';

export default function Profile() {
  const token = localStorage.getItem("token");

  if (token) {
    axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
  }

  let pathArray = window.location.pathname.split("/");
  let id = pathArray[2];

  const [values, setValues] = useState({
    name: "",
    email: "",
    firstName: "",
    lastName: ""
  });
  
  async function fetchUserFromServer() {
    const result = await axios.get(`http://localhost:8050/users/${id}`);
    console.log(result);
    setValues(result.data);
  }

  const account = [
        "Edit password",
        "Edit profile"
  ];

  if(token){
    return(
        <div className={classes.profile}>

        <div>
          <h3>Account Settings</h3>
            {account.map((name) => (
              <li className={classes.list}>
                <p className={classes.link}>{name}</p>
              </li>
            ))}
        </div>

        <div>
            <h1> {values.firstName} </h1>
            <div>
              <h2>{values.username}</h2>
            </div>
        </div>

        <div>
            <h1> My Reviews </h1>
        </div>
        {/* {reviews.map((review) => (
              <li>
              <h2>{values.username}</h2>
                <p>{review}</p>
              </li>
            ))} */}
      </div>
    )
  }
  else {
    return(
    <Login />
    )
  }
}

