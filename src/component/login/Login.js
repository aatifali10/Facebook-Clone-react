import React from "react";
import "./login.css";
import facebook from "../../images/Facebook-logo.png";
import { auth, provider } from "../../firebase";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
// import { useStateValue } from "../../StateProvider";

const Login = () => {
  // const [{}, dispatch] = useStateValue();

  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = FacebookAuthProvider.credentialFromResult(result);

      const url = `${result.user.photoURL}?access_token=${credential.accessToken}`;
      console.log(url);
    } catch (error) {
      console.log(error);
    }
  };

  // const credential = new FacebookAuthProvider(result);
  // console.log("show cresddh", credential);
  // const accessToken = credential.accessToken;
  // console.log(accessToken);
  // const credential = FacebookAuthProvider.credentialFromResult(result);
  // const accessToken = credential.accessToken;
  // const show = accessToken.photoURL;
  // const url = `${result.user.photoURL}?access_token${photo.accessToken}`;
  // console.log("hello photo", url);
  // const show = `${result.user.photoURL}?access_token=${photo.accessToken}`;
  // console.log("show photo", show);
  // dispatch({
  //   type: "SET_USER",
  //   user: {
  //     displayName: result.user.displayName,
  //     photo: url,
  //   },
  // });

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
