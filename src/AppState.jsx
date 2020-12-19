import React from "react";
import { useContext, useReducer } from "react";

//Initial State
const initialState = {
  // Return 's' when deploying
  url: "http://brandon-czaja-plants.herokuapp.com",
  token: null,
  username: null,
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "signup":
      fetch(state.url + "/users/", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      })
        .then((response) => response.json())
        .then((user) => {
          return {
            ...state,
            token: user.token,
          };
        });
    case "login":
      fetch(state.url + "/login/", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      })
        .then((response) => response.json())
        .then((user) => {
          return {
            ...state,
            token: user.token,
            username: user.username,
          };
        });
    default:
      return state;
  }
};

// App Context
const AppContext = React.createContext(null);

// App State Component
export const AppState = (props) => {
  // Create Reducer w/ userReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={(state, dispatch)}>
      {props.children}
    </AppContext.Provider>
  );
};

// Use App State Hook
export const useAppState = () => {
  return React.useContext(AppContext);
};
