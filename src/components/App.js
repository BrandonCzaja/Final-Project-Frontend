import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Auth from "../pages/Auth.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Nav from "./Nav.jsx";
import Plants from "../pages/Plants.jsx";
import { useAppState } from "../AppState.jsx";

export const App = (props) => {
  // Destructor state and dispatch from useAppState()
  const { state, dispatch } = useAppState();

  // Check to see if the user is logged in when the page loads
  React.useState(() => {
    // Check if there is a token in localStorage, if so parse it
    const auth = JSON.parse(window.localStorage.getItem("auth"));
    // If there is a token, log the user in and bring them to the dashboard
    if (auth) {
      dispatch({ type: "auth", payload: auth });
    } else {
      // Otherwise, ask them to log in and send them to Home
      props.history.push("/");
    }
  }, []);

  // React.useState(() => {
  //   window.location.reload();
  // }, []);

  return (
    <>
      <Route path="/" component={Nav} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth/:form" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/plants" component={Plants} />
      </Switch>
    </>
  );
};

// THE REFRESH ACTION DOES NOT WORK. CANNOT HIT REFRESH AND STAY LOGGED IN W/ LOCALSTORAGE. WATCH VIDEO #8
