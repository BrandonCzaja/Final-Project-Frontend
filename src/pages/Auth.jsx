import React from "react";
import { useAppState } from "../AppState.jsx";

const Auth = (props) => {
  // Changes the use of the form depending on if the route is sign up or log in
  const type = props.match.params.form;
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  const { dispatch } = useAppState();

  const actions = {
    signup: {
      action: "signup",
      payload: formData,
    },
    login: {
      action: "login",
      payload: formData,
    },
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actions[type]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input type="submit" value={type} />
      </form>
    </div>
  );
};

export default Auth;
