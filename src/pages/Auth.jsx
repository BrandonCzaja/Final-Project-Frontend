import React from "react";
import { useAppState } from "../AppState.jsx";

const Auth = (props) => {
  const type = props.match.params.form;
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });
  const [userData, setUserData] = React.useState(null);
  const { state, dispatch } = useAppState();
  console.log(`State coming in from useAppState: ${state}`);

  React.useEffect(() => {
    if (userData) {
      console.log(`User Data: ${userData}`);
      const { token, user } = userData;
      dispatch({ type: "auth", payload: { token, username: user.username } });
    }
  }, [userData]);

  const actions = {
    signup: () => {
      console.log(`Actions State Check: ${state}`);
      // This route exists
      return fetch(state.url + "/users", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((response) => response.json());
    },
    login: () => {
      console.log(`Actions Login Check: ${state}`);
      // This route exists
      return fetch(state.url + "/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((response) => response.json());
    },
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Both signup and login return the same data, the user
    actions[type]().then((data) => {
      setUserData(data);
    });
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
