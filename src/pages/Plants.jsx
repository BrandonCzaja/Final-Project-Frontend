import React, { useReducer } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppState } from "../AppState.jsx";

const Plants = (props) => {
  const { state, dispatch } = useAppState();
  const { token, url, plants } = state;

  const [pagy, setPagy] = React.useState([]);

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

  const nextPlants = async () => {
    const response = await fetch(url + plants.pagy.next_url, {
      method: "get",
      headers: {
        Authorization: "bearer " + token,
      },
    });

    const fetchedPlants = await response.json();

    dispatch({ type: "getPlants", payload: fetchedPlants });
  };

  const previousPlants = async () => {
    const response = await fetch(url + plants.pagy.prev_url, {
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
        <button onClick={previousPlants}>Previous Page</button>
        <button onClick={nextPlants}>Next Page</button>
        <ul>
          {/* This must be state.plants.data.map for deployment */}
          {state.plants.data.map((plant) => (
            <div className="plant" key={plant.id}>
              <h2>
                <i>Common Name</i>: {plant.common_name}
              </h2>
              <h2>
                <i>Scientific Name</i>: {plant.scientific_name}
              </h2>
              <h2>
                <i>Family</i>: {plant.family}
              </h2>
              <h2>
                <i>Genus</i>: {plant.genus}
              </h2>
              <img src={plant.image} alt={plant.common_name} />
            </div>
          ))}
        </ul>
        <button onClick={previousPlants}>Previous Page</button>
        <button onClick={nextPlants}>Next Page</button>
      </div>
    );
  };

  return plants ? loaded() : <h1>Loading...</h1>;
};

export default Plants;
