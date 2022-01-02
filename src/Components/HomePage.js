import React, { useState, useEffect } from "react";
// import usersService from "../Services/users";
import { Grid, ThemeProvider, CssBaseline } from "@material-ui/core";
import CardComponent from "./CardComponent";
import SearchComponent from "./SearchComponent";
import HomePageBar from "./HomePageBar";
import theme from "../Theme/theme";

const HomePage = ({ breweries }) => {
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    console.log("useEffect2");
    setFiltered(breweries);
  }, [breweries]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePageBar />
      <SearchComponent
        breweries={breweries}
        filtered={filtered}
        setFiltered={setFiltered}
      />
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {filtered.map((user) => (
            <Grid item key={user.id}>
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
    </ThemeProvider>
  );
};

export default HomePage;
