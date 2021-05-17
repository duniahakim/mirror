var db = firebase.firestore();
// var user = firebase.auth().currentUser;
//
// if (user == null) {
//   location.href = 'sign_in.html';
// }
// var user_id = user.uid;
var user_id = 'profileinfo';


db.collection('users').doc(user_id).get().then((s) => {
  if (s.exists) {
    var first_name = s.data().first_name;
    var last_name = s.data().last_name;
    var name = first_name + ' ' + last_name;

    var n = 0;
    s.data().closet.forEach(function(x) {
      db.collection("items").doc(x).get().then((doc) => {
        if (doc.exists) {
          $("#closet_box").append(
            `<div class="product-item">
              <div class="product-left">
                <a href="my_product_detail_view.html"><img class="ft-plus-square product-bg-circle bg-cyan mr-0" src=` + doc.data().photo + ` alt=""></a>
              </div>
              <div class="product-body">
                <a href="my_product_detail_view.html" class="job-heading pt-0">` + doc.data().title + `</a>
                <p class="notification-text font-small-4">
                  <a href="#" class="cmpny-dt2">` + name + `</a>
                </p>
                <div class="item-price524">
                  <span class="product-portfolio-price">$` + doc.data().price + `</span>
                </div>
                <div class="portfolio_actions">
                  <a href="#" class="product-btn-action">Delete</a>
                </div>
              </div>
            </div>
      `);
        } else {
          console.log("No such document!");
        }
      }).catch((error) => {
        console.log("Error getting document:", error);
      });

      n += 1;
    });

  }
});
