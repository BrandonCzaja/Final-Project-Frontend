import React, { useReducer } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppState } from "../AppState.jsx";

const Plants = (props) => {
  const { state, dispatch } = useAppState();
  const { token, url, plants } = state;

  const getPlants = async () => {
    const response = await fetch(url + "/plants/", {
      method: "get",
      headers: {
        Authorization: "bearer " + token,
      },
    });

    const fetchedPlants = await response.json();

    dispatch({ type: "getPlants", payload: fetchedPlants });
  };

  // Run getPlants when the page loads
  React.useEffect(() => {
    getPlants();
  }, []);

  const loaded = () => {
    return (
      <div className="dashboard">
        <ul>
          {state.plants.data.map((plant) => (
            <div className="plant" key={plant.id}>
              <h2>Common Name: {plant.common_name}</h2>
              <h2>Scientific Name: {plant.scientific_name}</h2>
              <h2>Plant Family: {plant.family}</h2>
              <h2>Plant Genus: {plant.genus}</h2>
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
