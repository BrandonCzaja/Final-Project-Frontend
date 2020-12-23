import React, { useReducer } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppState } from "../AppState.jsx";

const Plants = (props) => {
  // Grab state and dispatch from useAppState
  const { state, dispatch } = useAppState();
  // Destructor token and url from state
  const { token, url, plants } = state;
  console.log(url);

  //Function to get plants
  const getPlants = async () => {
    // Get request from state url and endpoint
    const response = await fetch(url + "/plants", {
      method: "get",
      headers: {
        Authorization: "bearer " + token,
      },
    });

    const fetchedPlants = await response.json();

    dispatch({ type: "getPlants", payload: fetchedPlants });
  };

  // Run getPlants at least once
  React.useEffect(() => {
    getPlants();
  }, []);

  const loaded = () => {
    console.log(state);
    return (
      <div className="dashboard">
        <ul>
          {plants.map((plant) => (
            <div className="plant" key={plant.id}>
              <h2>{plant.common_name}</h2>
              <h2>{plant.scientific_name}</h2>
              <h2>{plant.family}</h2>
              <h2>{plant.genus}</h2>
              <img src={plant.image} alt={plant.common_name} />
            </div>
          ))}
        </ul>
      </div>
    );
  };

  return plants ? loaded() : <h1>Loading...</h1>;
};

export default Plants;
