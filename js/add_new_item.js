var db = firebase.firestore();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var user_id = user.uid;

    // var user_id = 'profileinfo';
    var items_collection_ref = db.collection("items");
    var user_my_closet = db.collection("users").doc(user_id);

    const add_item_button = document.querySelector("#add_item_button");
    const item_title = document.querySelector("#new_item_title_textbox");
    const item_price = document.querySelector("#new_item_price_textbox");
    const item_size = document.querySelector("#new_item_size_textbox");
    const item_condition = document.querySelector("#new_item_condition_textbox");
    const item_brand = document.querySelector("#new_item_brand_textbox");
    const item_color = document.querySelector("#new_item_color_textbox");

    function uploadImage() {
      console.log("hello");
      const ref = firebase.storage().ref();
      const file = document.querySelector("#browse-photo").files[0];
      const name = new Date() + "-" + file.name;
      const metadata = {
        contentType: file.type
      };
      const task = ref.child(name).put(file, metadata);
      task.then(snapshot => snapshot.ref.getDownloadURL())
          .then(url => {
              console.log(url);
              document.querySelector("#image").src = url;
          }).catch(console.error);
    }

    add_item_button.addEventListener("click", function() {
      const title_value = item_title.value;
      const price_value = item_price.value;
      const size_value = item_size.value;
      const condition_value = item_condition.value;
      const brand_value = item_brand.value;
      const color_value = item_color.value;

      if (!title_value) {
        document.getElementById("missing-title-new-item").style.visibility = "visible";
        window.scrollTo(0, 0);
       } else {
        document.getElementById("missing-title-new-item").style.visibility = "hidden";
       }

      if (!price_value) {
        document.getElementById("missing-price-new-item").style.visibility = "visible";
        window.scrollTo(0, 0);
      } else {
        document.getElementById("missing-price-new-item").style.visibility = "hidden";
      }

      if (!size_value) {
        document.getElementById("missing-size-new-item").style.visibility = "visible";
        window.scrollTo(0, 0);
      } else {
        document.getElementById("missing-size-new-item").style.visibility = "hidden";
      }

      if (!condition_value) {
        document.getElementById("missing-condition-new-item").style.visibility = "visible";
        window.scrollTo(0, 0);
      } else {
        document.getElementById("missing-condition-new-item").style.visibility = "hidden";
      }

      const ref = firebase.storage().ref();
      const file = document.querySelector("#browse-photo").files[0];
      const name = new Date() + "-" + file.name;
      const metadata = {
        contentType: file.type
      };
      const task = ref.child(name).put(file, metadata);
      task.then(snapshot => snapshot.ref.getDownloadURL())
          .then(url => {
              items_collection_ref.add({ //this adds the new item to the "items" collection
                title: title_value,
                price: price_value,
                size: size_value,
                condition: condition_value,
                brand: brand_value,
                color: color_value,
                photo: url,
                user: user_id
              }).then((docRef) => { //this adds the item to the user's closet
                db.collection("data").doc("added_items").update({
                  number: firebase.firestore.FieldValue.increment(1)
                }).then((docRef)=> {
                  console.log("items added incremented!");
                }).catch((error) => {
                  console.error("Error adding document: ", error);
                });
                user_my_closet.update({
                  closet: firebase.firestore.FieldValue.arrayUnion(docRef.id)
                }).then((docRef)=> {
                  console.log("Item added to closet");
                }).catch((error) => {
                  console.error("Error adding document: ", error);
                });

                console.log("Item written with ID: ", docRef.id);
                location.href = 'my_portfolio.html';
              }).catch((error) => {
                console.error("Error adding document: ", error);
              });
          }).catch(console.error);
    });

  } else {
    console.log("not signed in");
  }
});
