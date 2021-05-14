var db = firebase.firestore();

var user_id = '1'; //we will need to properly implement this after we implement sign-up and log-in
var items_collection_ref = db.collection("items");
var user_my_closet = db.collection("users").doc(user_id);

const add_item_button = document.querySelector("#add_item_button");
const item_title = document.querySelector("#new_item_title_textbox");
const item_price = document.querySelector("#new_item_price_textbox");
const item_size = document.querySelector("#new_item_size_textbox");
const item_condition = document.querySelector("#new_item_condition_textbox");
const item_brand = document.querySelector("#new_item_brand_textbox");
const item_color = document.querySelector("#new_item_color_textbox");

add_item_button.addEventListener("click", function() {
  const title_value = item_title.value;
  const price_value = item_price.value;
  const size_value = item_size.value;
  const condition_value = item_condition.value;
  const brand_value = item_brand.value;
  const color_value = item_color.value;
  items_collection_ref.add({ //this adds the new item to the "items" collection
    title: title_value,
    price: price_value,
    size: size_value,
    condition: condition_value,
    brand: brand_value,
    color: color_value
  }).then((docRef) => { //this adds the item to the user's closet
    user_my_closet.update({
      my_closet: firebase.firestore.FieldValue.arrayUnion(docRef.id)
    }).then((docRef)=> {
      console.log("Item added to closet");
    }).catch((error) => {
      console.error("Error adding document: ", error);
    });
    console.log("Item written with ID: ", docRef.id);
  }).catch((error) => {
    console.error("Error adding document: ", error);
  });
});
