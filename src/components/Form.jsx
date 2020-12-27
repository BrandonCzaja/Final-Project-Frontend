import React from "react";
import { useAppState } from "../AppState.jsx";

const Form = (props) => {
  const { state, dispatch } = useAppState();
  console.log(state);

  const [search, setSearch] = React.useState();
  console.log(state);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="form">
      <form>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Form;
