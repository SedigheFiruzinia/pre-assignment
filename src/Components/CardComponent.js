import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Box,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";

const CardComponent = ({ name, breweryType, city, id }) => {
  return (
    <Box mb={5} justifyContent="center" alignItems="center">
      <Card variant="outlined">
        <CardContent>
          <Typography
            gutterBottom
            color="textSecondary"
            variant="body1"
            component="div"
          >
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {breweryType}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {city}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/profile/${id}`}>View Details</Link>
        </CardActions>
      </Card>
    </Box>
  );
};
export default CardComponent;
