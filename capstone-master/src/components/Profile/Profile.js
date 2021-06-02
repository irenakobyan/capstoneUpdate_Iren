import React, {Component, useState} from 'react';
import classes from "./Profile.module.css";
import axios from "axios";

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
  }

  const account = [
        "Edit password",
        "Edit profile"
  ];

    return(
        <div className={classes.profile}>

        <div>
        <h3>Account Settings</h3>
          {account.map((name) => (
            <li className={classes.list}>
              <a className={classes.link}>{name}</a>
            </li>
          ))}
        </div>

        <div>
            <h1>Irena Hakobyan</h1>
            <div>
              <h2>My reviews</h2>
            </div>
        </div>
      </div>
    )
}

