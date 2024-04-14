// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMRiICnqx5Dg_wrTkeFy8xNajbsI7wJGg",
  authDomain: "brainbase-auth.firebaseapp.com",
  projectId: "brainbase-auth",
  storageBucket: "brainbase-auth.appspot.com",
  messagingSenderId: "660133395370",
  appId: "1:660133395370:web:815e756d1a4359741989d3",
  measurementId: "G-722J71F484"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);