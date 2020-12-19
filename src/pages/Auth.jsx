import React from "react";

const Auth = (props) => {
  // Changes the use of the form depending on if the route is sign up or log in
  const type = props.match.params.form;

  return (
    <div>
      <form>
        <input type="text" name="username" placeholder="Username" value="" />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value=""
        />
        <input type="submit" value={type} />
      </form>
    </div>
  );
};

export default Auth;
