var db = firebase.firestore();
var user = firebase.auth().currentUser;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var user_id = user.uid;
    var user_email = user.email;

    // var user_id = 'profileinfo';


    db.collection("users").doc(user_id).get().then((doc) => {
      if (doc.exists) {
        const first_name = doc.data().first_name;
        const last_name = doc.data().last_name;
        const email = doc.data().Email;
        const venmo_username = doc.data().Venmo_username;
        const about_me = doc.data().about;

        document.getElementById('first_name_profile').innerHTML = first_name;
        document.getElementById('last_name_profile').innerHTML = last_name;
        document.getElementById('email_profile').innerHTML = email;
        document.getElementById('venmo_profile').innerHTML = venmo_username;
        document.getElementById('about_me_profile').innerHTML = about_me;
      }
    });
  } else {
    console.log("not signed in");
  }
});
