import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDYqI05kaPXIFxQaHy93s4EXpXdX4sk-Ss",
  authDomain: "facebook-clone-50af7.firebaseapp.com",
  projectId: "facebook-clone-50af7",
  storageBucket: "facebook-clone-50af7.appspot.com",
  messagingSenderId: "837432775035",
  appId: "1:837432775035:web:74212e32007d7742966dde",
});

const auth = firebase.auth();
const provider = new firebase.auth.facebookAuthProvider();

export { auth, provider };
