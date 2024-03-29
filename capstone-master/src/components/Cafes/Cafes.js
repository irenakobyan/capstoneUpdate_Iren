import React, { Component } from "react";
import Filter from "./Filter/Filter.js";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import RenderCafe from "./RenderCafe/RenderCafe.js";
import classes from "./Cafes.module.css";

class Cafes extends Component {
  state = {
    search: "",
  };

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className={classes.grow}>
          <div className={classes.search}>
            <SearchIcon />
            <InputBase
              placeholder="Search"
              className={classes.inputRoot}
              inputProps={{ "aria-label": "search" }}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className={classes.filter}>
          <Filter />

          <div className={classes.cafeItems}>
            <RenderCafe search={this.state.search} />
          </div>
        </div>
      </div>
    );
  }
}

export default Cafes;
