import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYqI05kaPXIFxQaHy93s4EXpXdX4sk-Ss",
  authDomain: "facebook-clone-50af7.firebaseapp.com",
  projectId: "facebook-clone-50af7",
  storageBucket: "facebook-clone-50af7.appspot.com",
  messagingSenderId: "837432775035",
  appId: "1:837432775035:web:74212e32007d7742966dde",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const provider = new getAuth.facebookAuthProvider();
const provider = new FacebookAuthProvider(app);

export { auth, provider, app };
