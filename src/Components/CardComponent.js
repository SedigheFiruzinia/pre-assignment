import React from "react";
import { Link } from "react-router-dom";
import { Card, Typography, CardActionArea } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { red } from "@material-ui/core/colors";

const CardComponent = ({ name, breweryType, city, id }) => {
  const limitedName = name.length >= 23 ? name.substring(0, 20) + "..." : name;

  return (
    <Card
      variant="outlined"
      style={{ boxShadow: "5px 1px 20px 0 rgba(10,0,0,0.1)" }}
    >
      <CardActionArea
        component={Link}
        to={`/profile/${id}`}
        title="click for more details"
      >
        <Typography
          variant="inherit"
          component="div"
          style={{ marginInline: "5px", marginTop: 10 }}
        >
          {limitedName}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          color="textSecondary"
          style={{ marginLeft: "5px" }}
        >
          {breweryType}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          <LocationOnIcon style={{ color: red[300], fontSize: 14 }} />
          {city}
        </Typography>
      </CardActionArea>
    </Card>
  );
};
export default CardComponent;
