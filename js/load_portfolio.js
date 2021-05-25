var db = firebase.firestore();

function delete_item(user_id, item_id) {
  db.collection('items').doc(item_id).get().then((doc) => {
    if (doc.exists) {
      db.collection('items').doc(item_id).delete().then(() => {
        db.collection('users').doc(user_id).update({
          closet: firebase.firestore.FieldValue.arrayRemove(item_id)
        });
        console.log("Document successfully deleted!");
        location.reload();
      }).catch((error) => {
        console.error("Error removing document: ", error);
      });
    }
  });
}

function list_item_as_sold(user_id, item_id) {
  db.collection("items").doc(item_id).get().then((doc) => {
    if (!doc.data().sold) {
      db.collection("items").doc(item_id).update({
        sold: true
      }).then(() => {
        db.collection("data").doc("sold_items").update({
          number: firebase.firestore.FieldValue.increment(1),
          titles: firebase.firestore.FieldValue.arrayUnion(doc.data().title)
        });
        console.log("Item marked as sold!");
      }).catch((error) => {
        console.error("Error updating document: ", error);
      });
    }
  });
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var user_id = user.uid;
    // var user_id = 'profileinfo';


    db.collection('users').doc(user_id).get().then((s) => {
      if (s.exists) {
        var first_name = s.data().first_name;
        var last_name = s.data().last_name;
        var name = first_name + ' ' + last_name;

        var n = 0;
        if (!s.data().closet.length) {
          $("#closet_box").append(
            `<div class="product-item">
              <div class="product-body">
                <a href="my_product_detail_view.html" class="job-heading pt-0"> Your closet is empty! </a>
              </div>
            </div>
      `);
        }
        s.data().closet.forEach(function(x) {
          db.collection("items").doc(x).get().then((doc) => {
            if (doc.exists) {
              const sold = doc.data().sold;
              var sold_text = ""
              if (sold) {
                sold_text = "SOLD! " + doc.data().title;
              }
              $("#closet_box").append(
                `<div class="product-item">
                  <div class="product-left">
                    <a href="my_product_detail_view.html?item=` + x.id + `"><img class="ft-plus-square product-bg-circle bg-cyan mr-0" src=` + doc.data().photo + ` alt=""></a>
                  </div>
                  <div class="product-body">
                    <a href="my_product_detail_view.html?item=` + x.id + `" class="job-heading pt-0">` + sold_text + doc.data().title + `</a>
                    <p class="notification-text font-small-4">
                      <a href="#" class="cmpny-dt2">` + name + `</a>
                    </p>
                    <div class="item-price524">
                      <span class="product-portfolio-price">$` + doc.data().price + `</span>
                    </div>
                    <div class="portfolio_actions">
                      <a class="product-btn-action" type="button" onClick="delete_item(\'` + user_id + `\',\'` + doc.id + `\')" > Delete </a>
                      <a class="product-btn-action" type="button" onClick="list_item_as_sold(\'` + user_id + `\',\'` + doc.id + `\')" > Mark as sold!</a>
                    </div>
                  </div>
                </div>
          `);
            } else {
              console.log("No such document!" + x);
            }
          }).catch((error) => {
            console.log("Error getting document:", error);
          });

          n += 1;
        });
      }
    });

  } else {
    console.log("not signed in");
  }
});
