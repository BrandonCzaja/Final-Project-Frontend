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
const AppContext = React.createContext(null); //Provides state to everything

// App State Component
export const AppState = (props) => {
  //Pass action(dispatch) to reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(`App State Component: ${state}`);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

// Use App State Hook
export const useAppState = () => {
  return React.useContext(AppContext);
};
