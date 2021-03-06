var db = firebase.firestore();

function show_menu_info(user_id) {
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
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var user = firebase.auth().currentUser;
    var user_id = user.uid;

    db.collection('users').doc(user_id).get().then((doc) => {
        if (!doc.exists) {
          db.collection('users').doc(user_id).set({
            Email: user.email,
            first_name: user.displayName,
            last_name: '',
            about: '',
            Venmo_username: '',
            closet: [],
            saved: []
          });
          setTimeout(show_menu_info, 300, user_id);
        }
        else {
          show_menu_info(user_id)
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
  } else {
    console.log("not signed in");
    location.href = 'sign_in.html';
  }
});
