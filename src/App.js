import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import DetailPage from "./Components/DetailPage";
import { Container } from "@material-ui/core";
import usersService from "./Services/users";

const App = () => {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    console.log("useEffect1");
    usersService.get().then((user) => setBreweries(user));
  }, []);

  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/profile/:id">
            <DetailPage breweries={breweries} />
          </Route>
          <Route path="/">
            <HomePage breweries={breweries} />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
