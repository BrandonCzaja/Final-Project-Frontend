import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Auth from "../pages/Auth.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Nav from "./Nav.jsx";

export const App = (props) => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth/:form" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  );
};

// url
// State and setState for plants
// Function that will grab the plants from the backend with fetch
// React use effect to get the plants
// Loaded function that can be used for turnary operator to display data when available otherwise loading... Need to map through the plants... Can give each of them a note button that takes the user to a new page and from there They can delete notes or add notes
// Create a form that has createChange / handleChange / submit / handleSubmit to track state in the form
// Return statement
