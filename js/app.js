const firebaseConfig = {
  apiKey: "AIzaSyDeESwjx2lAYX3TS-wU7VTBq01wVFZlHkI",
  authDomain: "mirror-4f001.firebaseapp.com",
  projectId: "mirror-4f001",
  storageBucket: "mirror-4f001.appspot.com",
  messagingSenderId: "291658986964",
  appId: "1:291658986964:web:cfea78523f8c6ed7689241"
};


// Initialize Cloud Firestore through Firebase
firebase.initializeApp(firebaseConfig);

var user = firebase.auth().currentUser;

if (user == null) {
  location.href = 'sign_in.html';
}
