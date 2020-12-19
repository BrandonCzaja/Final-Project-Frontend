import React from "react";
import { useContext, useReducer } from "react";

//Initial State
const initialState = {
  // Return 's' when deploying
  url: "http://brandon-czaja-plants.herokuapp.com",
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
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
