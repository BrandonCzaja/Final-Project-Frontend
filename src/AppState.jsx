import React, { useContext, useReducer } from "react";

//Initial State of the application:
const initialState = {
  // Removed 's' from url
  url: "http://brandon-czaja-plants.herokuapp.com",
  // This local host works locally for getting all data, but the deployed site does not work
  // url: "http://localhost:3000",
  token: null,
  username: null,
  plants: null,
  blankPlant: {
    common_name: "",
    scientific_name: "",
    family: "",
    genus: "",
    image: "",
  },
};

const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "auth":
      console.log(`Reducer State: ${state}`);
      newState = { ...state, ...action.payload };
      return newState;
      break;
    case "logout":
      newState = { ...state, token: null, username: null };
      window.localStorage.removeItem("auth");
      return newState;
      break;
    case "getPlants":
      console.log(action.payload);
      newState = { ...state, plants: action.payload };
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
