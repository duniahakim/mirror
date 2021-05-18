var db = firebase.firestore();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("signed in");
    var user = firebase.auth().currentUser;
    console.log(user);
  } else {
    console.log("not signed in");
  }
});

var user_id = user.uid;
// var user_id = 'profileinfo';


db.collection("users").doc(user_id).get().then((doc) => {
  if (doc.exists) {
    const first_name = doc.data().first_name;
    const last_name = doc.data().last_name;
    const email = doc.data().Email;

    document.getElementById('first_name_menu').innerHTML = first_name;
    document.getElementById('last_name_menu').innerHTML = last_name;
    document.getElementById('email_menu').innerHTML = email;
  }
});
