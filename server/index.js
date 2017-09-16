const express = require('express');
const path = require('path');
var admin = require('firebase-admin');

const app = express();
const PORT = process.env.PORT || 5000;

var serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://quiz-homework.firebaseio.com"
});

var db = admin.database();
var ref = db.ref("server/saving-data/fireblog");
var refKatas = db.ref("katas");

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  refKatas.once("value", function(snapshot) {
    console.log(snapshot.val());
    res.send(snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
  var usersRef = ref.child("users");
  usersRef.set({
    rimvydas_kulda: {
      date_of_birth: "June 23, 1912",
      full_name: "Alan Turing"
    }
  });
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
