import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import classes from "./RenderCafe.module.css";

export default function RenderCafe(props) {
  const [cafes, setCafes] = useState([]);

  let history = useHistory();

  async function fetchCafesFromServer() {
    const result = await axios.get("http://localhost:8050/cafes");
    setCafes(result.data);
  }

  useEffect(() => {
    fetchCafesFromServer();
  }, []);

  const filteredCafes = cafes.filter((cafe) => {
    return cafe.name.toLowerCase().indexOf(props.search.toLowerCase()) !== -1;
  });

  return (
    <div className={classes.renderCafe}>
      {filteredCafes.map((cafe) => (
        <div
          className={classes.eachCafe}
          onClick={() => {
            history.push("mycafe/" + cafe._id);
          }}
        >
          <img alt="cafeImage" src={cafe.selectedFile} style={{ width: "50%" }} />
          <p>
            <b>{cafe.name}</b> <br />
            Address: {cafe.street_name} <br />
            District: {cafe.district} <br />
          </p>
        </div>
      ))}
    </div>
  );
}
