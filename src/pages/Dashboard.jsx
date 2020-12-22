import React, { useReducer } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppState } from "../AppState.jsx";

const Dashboard = (props) => {
  const { state, dispatch } = useAppState();
  const { token, url, plants } = state;

  // const getPlants = async () => {
  //   const response = fetch(url + "/plants");
  //   const plants = await response.json();
  //   dispatch({ type: "getPlants", payload: plants });
  // };

  // React.useEffect(() => getPlants(), []);

  // const loaded = () => (
  //   <div className="dashboard">
  //     <h1>North American Plants</h1>
  //   </div>
  // );

  // return plants ? loaded() : <h1>Loading...</h1>;
  return <h1>Dashboard</h1>;
};

export default Dashboard;
