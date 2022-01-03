import React from "react";
// import usersService from "../Services/users";
import {
  Grid,
  ThemeProvider,
  CssBaseline,
  Box,
  Button,
} from "@material-ui/core";

import PageBar from "./PageBar";
import theme from "../Theme/theme";
import BreweryDetails from "./BreweryDetails";
import { useHistory, useParams } from "react-router-dom";
import storage from "../utils/storage";

const DetailPage = ({ breweries }) => {
  const history = useHistory();
  let brewery;
  const id = useParams().id;
  if (storage.loadBrewery()) {
    brewery = storage.loadBrewery();
  } else {
    brewery = breweries.find((b) => b.id === id);
    storage.saveBrewery(brewery);
  }

  const goBack = (
    <Button onClick={() => history.push("/")} variant="contained">
      back
    </Button>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageBar rightComponent={goBack} />
      <Box
        sx={{
          display: "flex",
          backgroundRepeat: "no-repeat",
          marginTop: 100,
          marginInline: 200,
        }}
      >
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={5}>
            <BreweryDetails brewery={brewery} />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default DetailPage;
