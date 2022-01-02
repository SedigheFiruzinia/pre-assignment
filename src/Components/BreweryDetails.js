import React from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Card, CardContent, Typography } from "@material-ui/core";

const BreweryDetails = ({ breweries }) => {
  const id = useParams().id;
  const brewery = breweries.find((b) => b.id === id);
  return (
    <Box mb={5} justifyContent="center" alignItems="center">
      <Card variant="outlined">
        <CardContent>
          {Object.keys(brewery).map((b, i) => (
            <Typography color="initial" gutterBottom key={i}>
              {brewery[b]}
            </Typography>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default BreweryDetails;
