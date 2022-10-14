import React from "react";
import "./login.css";
import { auth, provider } from "../../firebase";

const Login = () => {
  const signIn = () => {
    auth
      .signInWithPopUp(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="login-wrapper">
      <div className="login">
        <img src="" alt="" />
        <h2>Sign in with Facebook</h2>
        <button onClick={signIn}>Login with Facebook</button>
      </div>
    </div>
  );
};

export default Login;
