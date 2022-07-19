import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvtTPWvXGd3Jsnc-tZ8ff2mrjoCXT7xQM",
  authDomain: "web3-music-389d6.firebaseapp.com",
  projectId: "web3-music-389d6",
  storageBucket: "web3-music-389d6.appspot.com",
  messagingSenderId: "1013281840752",
  appId: "1:1013281840752:web:85839a9883ebf6ae34deb5",
  measurementId: "G-24RH4NE799",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    return res;
  } catch (err) {
    console.log("ERROR: ", err);
    throw err;
  }
};

export const signInWithFacebook = async () => {
  try {
    const res = await signInWithPopup(auth, facebookProvider);
    return res;
  } catch (err) {
    console.log("ERROR: ", err);
    throw err;
  }
};

export default firebaseConfig;
