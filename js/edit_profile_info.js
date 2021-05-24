var db = firebase.firestore();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var user_id = user.uid;
    // var user_id = 'profileinfo';

    const first_name_textbox = document.querySelector("#first_name_textbox");
    const last_name_textbox = document.querySelector("#last_name_textbox");
    const email_textbox = document.querySelector("#email_textbox");
    const venmo_username = document.querySelector("#venmo_username");
    const about = document.querySelector("#about");
    const save_changes = document.querySelector("#save_changes_button");

    var users_collection_ = db.collection("users");
    var user_info = db.collection("users").doc(user_id);

    user_info.get().then((doc) => {
      if (doc.data().first_name) {
        first_name_textbox.value = doc.data().first_name;
      }
      if (doc.data().last_name) {
        last_name_textbox.value = doc.data().last_name;
      }
      if (doc.data().Email) {
        email_textbox.value = doc.data().Email;
      }
      if (doc.data().Venmo_username) {
        venmo_username.value = doc.data().Venmo_username;
      }
      if (doc.data().about) {
        about.value = doc.data().about;
      }
    }).catch((error) => {
      console.error("Error adding value: ", error);
    });

    save_changes.addEventListener("click", function() {
      const first_value = first_name_textbox.value;
      const last_value = last_name_textbox.value;
      const email_value = email_textbox.value;
      const venmo_value = venmo_username.value;
      const about_value = about.value;

      user_info.update({
        first_name: first_value,
        last_name: last_value,
        Email: email_value,
        Venmo_username: venmo_value,
        about: about_value,

      }).then(() => {
        console.log("Document successfully updated!");
        location.href = 'my_profile_timeline.html';
      }).catch((error) => {
        console.error("Error adding value: ", error);
      });
    });
  } else {
    console.log("not signed in");
  }
});
