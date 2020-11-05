import firebase from 'firebase/app';
import "firebase/auth"
import "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DB,
  projectId: process.env.REACT_APP_PID,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_SID,
  appId: process.env.REACT_APP_APPID
};

export const fb = firebase.initializeApp(config);

export const db = fb.firestore();
export const auth = fb.auth();