import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
}

export const app = initializeApp(firebaseConfig)


// new 

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAel8UVxUttw2N5kn97cC6nbmgZzd-0c74",
//   authDomain: "stayvistalive.firebaseapp.com",
//   projectId: "stayvistalive",
//   storageBucket: "stayvistalive.appspot.com",
//   messagingSenderId: "592306452480",
//   appId: "1:592306452480:web:359445ec0b66ff33fe40e5"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);