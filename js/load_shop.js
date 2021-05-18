var db = firebase.firestore();
var user = firebase.auth().currentUser;

// if (user == null) {
//   console.log("need to sign in!");
//   location.href = 'sign_in.html';
// }
var user_id = user.uid;
// var user_id = 'profileinfo';

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
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});


db.collection('items').get().then((s) => {
  var n = 0;
  s.forEach(function(x) {
    user_id = x.data().user;
    db.collection("users").doc(user_id).get().then((doc) => {
      if (doc.exists) {
        var first_name = doc.data().first_name;
        var last_name = doc.data().last_name;
        var name = first_name + ' ' + last_name;
        $("#shop_box").append(
          `<div class="col-xl-4 col-lg-6 col-md-6">
                <div class="full-width mt-30">
                  <div class="recent-items">
                    <div class="posts-list">
                      <div class="feed-shared-product-dt">
                        <div class="pdct-img">
                          <a href="my_product_detail_view.html"><img class="ft-plus-square product-bg-w bg-cyan mr-0" src=` + x.data().photo + `alt=""></a>
                        </div>
                        <div class="author-dts pp-20">
                          <a href="my_product_detail_view.html" class="job-heading pp-title">` + x.data().title + `</a>
                          <p class="notification-text font-small-4">
                            <a href="#" class="cmpny-dt">` + name + `</a>
                          </p>
                          <div class="ppdt-price-sales">
                            <div class="ppdt-price"> $` +
          x.data().price +
          `</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="post-meta">
                      <div class="job-actions">
                        <div class="aplcnts_15">
                          <a href="my_product_detail_view.html?item=` + x.id + `" class="view-btn btn-hover">Detail View</a>
                        </div>
                        <div class="action-btns-job">
                          <a href="mailto:` + doc.data().Email + `?subject = About Product ` + x.data().title + `" class="crt-btn crt-btn-hover mr-2"><i class="far fa-envelope"></i></a>
                          <a href="#" class="bm-btn bm-btn-hover active"><i class="far fa-bookmark"></i></a>
                        </div>
                      </div>
                    </div>
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
});
