import React, { useContext, useReducer } from "react";

//Initial State of the application:
const initialState = {
  // THIS WORKS DO NOT REMOVE IT
  url: "https://brandon-czaja-plants.herokuapp.com",
  token: null,
  username: null,
  plants: null,
  // plants: [],
  blankPlant: {
    common_name: "",
    scientific_name: "",
    family: "",
    genus: "",
    image: "",
  },
};

const reducer = (state, action) => {
  console.log(state);
  let newState;
  switch (action.type) {
    case "auth":
      console.log(state);
      newState = { ...state, ...action.payload };
      console.log(newState);
      return newState;
      break;
    case "logout":
      newState = { ...state, token: null, username: null };
      window.localStorage.removeItem("auth");
      console.log(newState);
      return newState;
      break;
    case "getPlants":
      console.log(action.payload);
      console.log(state);
      newState = { ...state, plants: action.payload };
      console.log(newState);
      return newState;
      break;
    default:
      return state;
      break;
  }
};

// App Context
const AppContext = React.createContext(null); //Provides state to everything

// App State Component
export const AppState = (props) => {
  //Pass action(dispatch) to reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  console.log(initialState);

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
