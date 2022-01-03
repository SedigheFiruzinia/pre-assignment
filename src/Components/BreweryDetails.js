import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Divider,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const BreweryDetails = ({ brewery }) => {
  const history = useHistory();

  return (
    <Box mb={5} justifyContent="center" alignItems="center">
      <Card
        variant="outlined"
        style={{
          boxShadow: "5px 1px 20px -5px rgba(10,0,0,0.2)",
          backgroundColor: "rgba(10, 0, 0, 0.05)",
        }}
      >
        <CardContent style={{ margin: 15 }}>
          {Object.keys(brewery).map(
            (key, index) =>
              index > 0 &&
              index <= 9 && (
                <Typography color="initial" key={index}>
                  <Box
                    component="span"
                    sx={{
                      fontWeight: "bold",
                      color: "rgba(30, 30, 30, 0.8)",
                    }}
                  >
                    {key + " \u00A0 :\u00A0 "}
                  </Box>
                  {brewery[key] === null ? "-" : brewery[key]}
                </Typography>
              )
          )}
          <Divider style={{ margin: 25 }} />
          <Box alignItems="center" sx={{ textAlign: "center" }}>
            <Button onClick={() => history.push("/")} variant="outlined">
              back
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BreweryDetails;
