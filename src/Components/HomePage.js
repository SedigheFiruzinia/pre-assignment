import React, { useState, useEffect } from "react";
// import usersService from "../Services/users";
import {
  Grid,
  ThemeProvider,
  CssBaseline,
  Box,
  Paper,
} from "@material-ui/core";
import CardComponent from "./CardComponent";
import SearchComponent from "./SearchComponent";
import PageBar from "./PageBar";
import theme from "../Theme/theme";
import backgroundImg from "../Theme/c.jpg";

const HomePage = ({ breweries }) => {
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    console.log("useEffect2");
    setFiltered(breweries);
  }, [breweries]);

  const search = (
    <SearchComponent
      breweries={breweries}
      filtered={filtered}
      setFiltered={setFiltered}
    />
  );

  return (
    //   <Paper style={{
    //     backgroundImage: `url(${backgroundImg})`
    // }}>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <PageBar rightComponent={search} />
      <Box
        sx={{
          display: "flex",
          backgroundRepeat: "no-repeat",
          marginTop: 50,
          marginInline: 200,
        }}
      >
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={5}>
            {filtered.map((user) => (
              <Grid item key={user.id} xs={3}>
                <CardComponent
                  name={user.name}
                  breweryType={user.brewery_type}
                  city={user.city}
                  id={user.id}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
    // </Paper>
  );
};

export default HomePage;
