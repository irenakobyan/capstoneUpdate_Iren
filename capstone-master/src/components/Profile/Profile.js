import React, {Component} from 'react';
import classes from "./Profile.module.css";

export default function Profile() {

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

