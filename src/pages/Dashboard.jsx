import React, { useReducer } from "react";
import { Link, useParams } from "react-router-dom";

const Dashboard = (props) => {
  // This will be the user's home page. From here they should be able to look up plants.
  // Stretch goal will be for them to save plants and add notes to them
  return (
    <>
      <h1>Welcome to the Dashboard</h1>
      <Link to="/plants">
        <div>See all plants</div>
      </Link>
    </>
  );

  // I need a button that will take me to /plants
};

export default Dashboard;
