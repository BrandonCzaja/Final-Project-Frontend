import React, { useContext, useReducer } from "react";

//Initial State of the application:
const initialState = {
  // Return 's' when deploying
  url: "http://brandon-czaja-plants.herokuapp.com",
  token: null,
  username: null,
};

// Reducer
const reducer = (state, action) => {
  console.log(state);
  let newState;
  switch (action.type) {
    case "auth":
      newState = { ...state, ...action.payload };
      return newState;
      break;
    default:
      return state;
      console.log(`Reducer State: ${state}`);
      break;
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
