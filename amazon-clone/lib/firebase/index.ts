// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATp46Ncu1vF9CNrM4nwBGSaWkpMngcm4k",
  authDomain: "clone-46e34.firebaseapp.com",
  projectId: "clone-46e34",
  storageBucket: "clone-46e34.appspot.com",
  messagingSenderId: "411164976828",
  appId: "1:411164976828:web:aac0e2daf20911723692b9",
  measurementId: "G-7EBKFEMN5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// function getAuth(app: FirebaseApp) {
//     throw new Error("Function not implemented.");
// }
// const analytics = getAnalytics(app);