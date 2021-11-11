import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardActions,
  Chip,
} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnOutlined from "@material-ui/icons/LocationOnOutlined";
import { Rating } from "@mui/material";
import "./style.css";

function PlaceDetails({ place, refProp, selected }) {
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <>
      <Card elevation={6} className="CardContainer">
        <div className="cardTopContainer">
          <div className="cardTopContent">
            <Typography variant="h6" gutterBottom>
              {place.name}
            </Typography>
            <Rating value={Number(place.rating)} className="rating" readOnly />
            <Box className="boxTopContainer">
              <Typography variant="subtitle1">Price</Typography>
              <Typography variant="subtitle1">{place.price_level}</Typography>
            </Box>
          </div>
          <CardMedia
            className="cardMedia"
            image={
              place.photo
                ? place.photo.images.large.url
                : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
            }
          ></CardMedia>
        </div>

        <div className="cardBottomContent">
          <div className="chipDiv">
            {place?.cuisine?.map(({ name }) => (
              <Chip key={name} size="small" label={name} className="chip" />
            ))}
          </div>

          {place?.address && (
            <div className="addressDiv">
              <LocationOnOutlined style={{ color: "rgba(0, 0, 0, 0.54)" }} />
              <Typography
                variant="subtitle2"
                color="textSecondary"
                className="address"
              >
                {place.address}
              </Typography>
            </div>
          )}

          {place?.phone && (
            <div className="phoneNumberDiv">
              <PhoneIcon style={{ color: "rgba(0, 0, 0, 0.54)" }} />
              <Typography variant="subtitle2" color="textSecondary">
                {place.phone}
              </Typography>
            </div>
          )}
        </div>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.web_url, "_blank")}
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.website, "_blank")}
          >
            Website
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default PlaceDetails;
