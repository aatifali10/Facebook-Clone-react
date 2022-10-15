import React from "react";
import "./login.css";
import facebook from "../../images/Facebook-logo.png";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useStateValue } from "../../StateProvider";

const Login = () => {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const photo = result.user;
        console.log("hello result show", photo);

        // const credential = new FacebookAuthProvider(result);
        // console.log("show cresddh", credential);
        // const accessToken = credential.accessToken;
        // console.log(accessToken);

        const photoURL = `${result.user.photoURL}?access_token=${photo.accessToken}`;
        console.log("show photo", photoURL);
        dispatch({
          type: "SET_USER",
          user: {
            displayName: result.user.displayName,
            photo: photoURL,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const signIn = () => {
  //   auth
  //     .signInWithPopup(provider)
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => console.log(error));
  // };
  return (
    <div className="login-wrapper">
      <div className="login">
        <img src={facebook} alt="" />
        <h2>Sign in with Facebook</h2>
        <button onClick={signIn}>Login with Facebook</button>
      </div>
    </div>
  );
};

export default Login;
