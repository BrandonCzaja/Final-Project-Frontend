import React, { useReducer, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppState } from "../AppState.jsx";

const Dashboard = (props) => {
  // // Grab state from useAppState()
  // const { state } = useAppState();
  // // const { url } = state;

  // const token = "tM_vyRwHmo__kNvStVE0N3950_E7eGC8nyoCqmZhEuA";
  // const url = `https://trefle.io/api/v1/plants/search?token=${token}&q=${search}`;

  // // Create search parameters
  // const [search, setSearch] = React.useState("");

  // useEffect(() => {
  //   fetch(url + search)
  //     .then((response) => response.json())
  //     .then((data) => setSearch(data));
  // }, []);

  // const handleChange = (event) => {
  //   setSearch({ ...search, [event.target.name]: event.target.value });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(search);
  // };

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="common_name"
          placeholder="Search by Common Name"
          value={search.common_name}
          onChange={handleChange}
        />
        <input type="submit" value="Search" />
      </form>
      <ul>
        {/* {search.data.map((plant) => (
          <div className="plant" key={plant.id}>
            <h2>Common Name: {plant.common_name}</h2>
            <h2>Scientific Name: {plant.scientific_name}</h2>
            <h2>Plant Family: {plant.family}</h2>
            <h2>Plant Genus: {plant.genus}</h2>
            <img src={plant.image} alt={plant.common_name} />
          </div>
        ))} 
      </ul> */}
    </div>
  );
};

export default Dashboard;
