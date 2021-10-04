import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import UserDetails from "./pages/UserDetails/UserDetails";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/chat">
          <Chat />
        </Route>
        <Route path="/user/:id/details">
          <UserDetails />
        </Route>
        <Route path="/chat/:id">
          <Chat />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
