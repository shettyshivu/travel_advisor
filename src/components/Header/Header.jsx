import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeaderStyle.js";
import { AppBar, Toolbar, Typography, Box, InputBase } from "@material-ui/core";
import { Autocomplete } from "@react-google-maps/api";
import SearchIcon from "@mui/icons-material/Search";
import useStyles from "./HeaderStyle";

function Header({ onPlaceChanged , onLoad }) {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.headerContainer}>
            <Typography variant={"h6"} className={classes.title}>
              Travel Advisor
            </Typography>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <div className={classes.search}>
                <div className={classes.searchicon}>
                  <SearchIcon />
                </div>
                <InputBase placeholder="Search" />
              </div>
            </Autocomplete>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
