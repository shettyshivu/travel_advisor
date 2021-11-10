import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Card,
} from "@material-ui/core";
import { Place } from "@material-ui/icons";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import "./style.css";

const PlaceList = ({ places,childClicked,loading,type,rating,setType,setRating }) => {

  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  return (
    <div className="listContainer">
      <Typography className="listTitle" variant="h5">
        Restaurants Hotels And Attractions
      </Typography>
      {loading ? (
        <div className="loading">
          <CircularProgress size="2rem" />
        </div>
      ) : (
        <>
          <div className="listFilter">
            <div className="listType">
              <InputLabel id="type">Type</InputLabel>
              <FormControl>
                <Select
                  value={type}
                  id="type"
                  onChange={(e) => setType(e.target.value)}
                >
                  <MenuItem value="restaurants">Restaurants</MenuItem>
                  <MenuItem value="hotels">Hotels</MenuItem>
                  <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="listRating">
              <InputLabel id="rating">Rating</InputLabel>
              <FormControl>
                <Select
                  value={rating}
                  id="rating"
                  onChange={(e) => setRating(e.target.value)}
                >
                  <MenuItem value="">All</MenuItem>
                  <MenuItem value="3">Above 3.0</MenuItem>
                  <MenuItem value="4">Above 4.0</MenuItem>
                  <MenuItem value="4.5">Above 4.5</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <Grid container spacing={3} className="list">
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} item key={i} xs={12} className="listItem">
                <PlaceDetails
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                  place={place}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default PlaceList;
