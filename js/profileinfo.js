/* ====== Index ======

var db = firebase.firestore();

const first_name_textbox = document.querySelector("#first_name_textbox");
const last_name_textbox = document.querySelector("#last_name_textbox");
const email_textbox = document.querySelector("#email_textbox");
const venmo_username = document.querySelector("#venmo_username");
const about = document.querySelector("#about");
const save_changes = document.querySelector("#save_changes_button");

var users_collection_ = db.collection("users");
var user_info = db.collection("users").doc("profileinfo");

save_changes.addEventListener("click", function() {};
  const first_value = first_name_textbox.value;
  const last_value = last_name_textbox.value;
  const email_value = email_textbox.value;
  const venmo_value = venmo_username.value;
  const about_value = about.value;

   user_info.update({
    name: first_value,
    last name: last_value,
    email: email_value,
    venmo: venmo_value,
    about: about_value,

  }).then((docRef) => { //this adds the item to the user's closet
    console.log("Item written with ID: ", docRef.id);
  }).catch((error) => {
    console.error("Error adding value: ", error);
  });
});


