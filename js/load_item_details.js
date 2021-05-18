var db = firebase.firestore();
// var user = firebase.auth().currentUser;
//
// if (user == null) {
//   location.href = 'sign_in.html';
// }
// var user_id = user.uid;
var user_id = 'profileinfo';

var url_string = window.location.href
var url = new URL(url_string);
var item_id = url.searchParams.get("item");

const title = document.querySelector("#item_details_title");
const price = document.querySelector("#item_details_price");
const size = document.querySelector("#item_details_size");
const condition = document.querySelector("#item_details_condition");
const brand = document.querySelector("#item_details_brand");
const color = document.querySelector("#item_details_color");
const photo = document.querySelector("#item_details_photo");
const seller_name = document.querySelector("#item_details_seller_name");
const email_btn = document.querySelector("#item_details_email_button");
const item_details_comments_btn = document.querySelector("#item_details_comments_btn");
const view_details_btn = document.querySelector("#view_item_details_btn");

db.collection('items').doc(item_id).get().then((doc) => {
  if (doc.exists) {
    seller_id = doc.data().user;
    db.collection('users').doc(seller_id).get().then((s) => {
      if (s.exists) {
        var first_name = s.data().first_name;
        var last_name = s.data().last_name;
        var name = first_name + ' ' + last_name;

        title.innerHTML = doc.data().title;
        price.innerHTML = doc.data().price;
        size.innerHTML = doc.data().size;
        condition.innerHTML = doc.data().condition;
        brand.innerHTML = doc.data().brand;
        color.innerHTML = doc.data().color;
        photo.src = doc.data().photo;
        seller_name.innerHTML = name;
        email_btn.onclick = function(){
          location.href = "mailto:" + s.data().Email + "?subject = About Product " + doc.data().title;
        };
        item_details_comments_btn.href = "my_product_detail_view_comments.html?item=" + item_id;
        view_details_btn.href = "my_product_detail_view.html?item=" + item_id;
      }
    });
  }
});
