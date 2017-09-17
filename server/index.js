const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

const app = express();
app.use(bodyParser.json()); // for parsing application/json

const PORT = process.env.PORT || 5000;

var serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://quiz-homework.firebaseio.com"
});

var db = admin.database();
var refResults = db.ref("results");
var refKatas = db.ref("katas");

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  refKatas.once("value", function(snapshot) {
    res.send(snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
});

app.post('/api/save', function (req, res) {
  console.log(req.body);
  res.set('Content-Type', 'application/json');
  refResults.push(req.body);
  res.send(req.body)
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
