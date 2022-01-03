import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import DetailPage from "./Components/DetailPage";
import { Container } from "@material-ui/core";
import breweriesService from "./Services/breweries";

const App = () => {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    breweriesService.getAll().then((brewery) => setBreweries(brewery));
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
