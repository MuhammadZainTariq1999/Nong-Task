import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBOtXMdY4uQV1vOhcbKb_ZberazIvrxxZw",
    authDomain: "nong-task.firebaseapp.com",
    databaseURL: "https://nong-task.firebaseio.com",
    projectId: "nong-task",
    storageBucket: "nong-task.appspot.com",
    messagingSenderId: "2320675167",
    appId: "1:2320675167:web:c3c3bbfdb62488673506ea"
  };
  // Initialize Firebase
const fire =  firebase.initializeApp(firebaseConfig);

export default fire;