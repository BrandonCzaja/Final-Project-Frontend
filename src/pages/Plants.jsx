import React, { useReducer } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppState } from "../AppState.jsx";

const Plants = (props) => {
  const { state, dispatch } = useAppState();
  const { token, url, plants } = state;

  const getPlants = async () => {
    const response = fetch(url + "/plants");
    const plants = await response.json();
    dispatch({ type: "getPlants", payload: plants });
  };
  return (
    <>
      <h1>Hello from Plants Page</h1>
      {/* <ul>
        {plants.map((plant) => {
          <div className="plant" key={plant.id}>
            <h2>{plant.common_name}</h2>
            <h3>{plant.scientific_name}</h3>
            <h3>{plant.year}</h3>
            <h3>{plant.family}</h3>
            <h3>{plant.genus}</h3>
            <img src={plant.image} />
          </div>;
        })}
      </ul> */}
    </>
  );
};

export default Plants;
