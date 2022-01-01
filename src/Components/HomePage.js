import React from "react";
import { Grid } from "@material-ui/core";
import CardComponent from "./CardComponent";
import SearchComponent from "./SearchComponent";

const HomePage = ({ users }) => {
  return (
    <div>
      <SearchComponent />
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              {users.map((user) => (
                <CardComponent
                  key={user.id}
                  name={user.name}
                  breweryType={user.breweryType}
                  city={user.city}
                  id={user.id}
                />
              ))}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
