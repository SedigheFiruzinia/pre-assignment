import React, { useState, useEffect } from "react";
import usersService from "./Services/users";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import UserPage from "./Components/UserPage";
import { Container } from "@material-ui/core";
const App = () => {
  const [users, setUsers] = useState([]);

  //////
  useEffect(() => {
    console.log("useEffect1");
    usersService.get().then((user) => setUsers(user));
  }, []);

  //////
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/profile/:id">
            <UserPage user={users} />
          </Route>
          <Route path="/">
            <HomePage users={users} />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
