import firebase from '@firebase/app';
import "@firebase/auth";
import "@firebase/database";
import "@firebase/storage";


// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDZHi1p0hgHoKDLkTKfyIjJH_HT9tIfrK4",
    authDomain: "react-slack-clone-4f386.firebaseapp.com",
    projectId: "react-slack-clone-4f386",
    storageBucket: "react-slack-clone-4f386.appspot.com",
    messagingSenderId: "979079483587",
    appId: "1:979079483587:web:8624723314fe3c95641276",
    measurementId: "G-XG6G5RCKH6"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;