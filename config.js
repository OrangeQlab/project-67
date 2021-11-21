import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = { apiKey: "AIzaSyDxldsRjSS9uNDXNUsPl5BMqANB8RpcFOI",
 authDomain: "project-67-31ac3.firebaseapp.com",
  projectId: "project-67-31ac3",
   storageBucket: "project-67-31ac3.appspot.com", 
   messagingSenderId: "659175365338",
 appId: "1:659175365338:web:a3b8b5b189f64e14e9a3e3" };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();