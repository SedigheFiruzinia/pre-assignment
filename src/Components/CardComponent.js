import React from "react";
import { Link } from "react-router-dom";
import { Card, Typography,Button, CardActionArea } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { red , indigo} from "@material-ui/core/colors";





const CardComponent = ({ name, breweryType, city, id }) => {
  return (
    <Card variant="outlined" style={{boxShadow: "5px 1px 20px 0 rgba(10,0,0,0.1)"}}>
    <CardActionArea component={Link} to={`/profile/${id}`}>
      <Typography
        variant="inherit"
        component="div"
        style={{ marginInline: "5px" }}
      >
        {name}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        style={{ marginLeft: "5px" }}
      >
        {breweryType}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={{ marginBottom: 20 }}>
        <LocationOnIcon style={{ color: red[300], fontSize: 14  }} />
        {city}
      </Typography>

      <Typography variant="body2" gutterBottom  style={{ color:indigo[400] }}>
        View Details
      </Typography>
      
</CardActionArea>
    </Card>
  );
};
export default CardComponent;
