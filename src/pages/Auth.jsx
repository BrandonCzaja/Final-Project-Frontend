import React from "react";
import { useAppState } from "../AppState.jsx";

// Renders whenever the url hits /login or /signup
const Auth = (props) => {
  // Rerenders every time the props changes. Changes the type of auth form depending on if the user is signing up or logging in
  const type = props.match.params.form;
  // Create state for the form. Set the form data to empty username and empty password
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });
  console.log(`FormData: ${formData}`);
  const [userData, setUserData] = React.useState(null);
  console.log(`UserData: ${userData}`);
  const { state, dispatch } = useAppState();
  state;

  React.useEffect(() => {
    if (userData) {
      console.log(`useEffect userData: ${userData}`);
      const { token, user } = userData;
      console.log(`Token: ${token}`);
      console.log(`User: ${user}`);
      dispatch({ type: "auth", payload: { token, username: user.username } });
      window.localStorage.setItem(
        "auth",
        JSON.stringify({ token, username: user.username })
      );
      // Send user to dashboard
      props.history.push("/dashboard");
    }
  }, [userData]);

  // These actions get passed to dispatch
  const actions = {
    signup: () => {
      console.log(`Actions State: ${state}`);
      return fetch(state.url + "/users", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((response) => response.json());
      console.log(`Signup Response: ${response}`);
    },
    login: () => {
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
    console.log(`handleChange formData: ${formData}`);
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
      <h1>Plant App {type}</h1>
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
