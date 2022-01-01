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
          <Typography color="initial" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h5" component="div">
            {breweryType}
          </Typography>
          <Typography sx={{ mb: 1.9 }} color="secondary">
            adjective
          </Typography>
          <Typography variant="body2">{city}</Typography>
        </CardContent>
        <CardActions>
          <Link to={`/profile/${id}`}>View Details</Link>
        </CardActions>
      </Card>
    </Box>
  );
};
export default CardComponent;
