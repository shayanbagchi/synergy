import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyCKzvWifl04afPPfXInnEqCyRNRmbhakfY",
    authDomain: "synergy-5582d.firebaseapp.com",
    projectId: "synergy-5582d",
    storageBucket: "synergy-5582d.appspot.com",
    messagingSenderId: "609938875662",
    appId: "1:609938875662:web:fbbef154277ec85178e35f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;
