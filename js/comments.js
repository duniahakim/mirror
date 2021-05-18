var db = firebase.firestore();
var user = firebase.auth().currentUser;

var user_id = user.uid;
// var user_id = 'profileinfo';

var url_string = window.location.href
var url = new URL(url_string);
var item_id = url.searchParams.get("item");

const comment = document.querySelector("#comment_text");
const comment_btn = document.querySelector("#post_comment_btn");
const view_details_btn = document.querySelector("#view_item_details_btn");
const item_details_comments_btn = document.querySelector("#item_details_comments_btn");
const number_of_comments = document.querySelector("#number_of_comments");

comment_btn.addEventListener("click", function() {
  const text = comment.value;
  console.log(text);
  db.collection("users").doc(user_id).get().then((user_doc) => {
    if (user_doc.exists) {
      var first_name = user_doc.data().first_name;
      var last_name = user_doc.data().last_name;
      var name = first_name + ' ' + last_name;

      db.collection("items").doc(item_id).collection("comments").add({
        user_name: name,
        comment: text
      }).then((docRef) => {
        location.reload();
        console.log("successfully added comment");
      }).catch((error) => {
        console.error("Error adding document: ", error);
      });
    };
  });
});

db.collection("items").doc(item_id).get().then((doc) => {
  if (doc.exists) {
    view_details_btn.href = "my_product_detail_view.html?item=" + item_id;
    item_details_comments_btn.href = "my_product_detail_view_comments.html?item=" + item_id;
    db.collection("items").doc(item_id).collection("comments").get().then((querySnapshot) => {
      number_of_comments.innerHTML = querySnapshot.size;
      querySnapshot.forEach((comment_doc) => {
        $("#comments_box").append(
          `<div class="item-comment-card mt-30">
                <div class="comment-meta">
                  <div class="comment-content-dt">
                    <div class="comment-block-section">
                      <div class="item-comet-avatar">
                        <img src="images/left-imgs/img-3.jpg" alt="">
                      </div>
                      <div class="we-comment">
                        <div class="wth-link-badge">
                          <a href="#" title="" class="ut-name-link">` + comment_doc.data().user_name + `</a>
                        </div>
                        <p>` + comment_doc.data().comment + `</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        `);
      });
    });
  }
});
