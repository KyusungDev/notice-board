const express = require('express');
const path = require('path');
const app = express();
const firebase = require('firebase');

firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'notice-board-31d92.firebaseapp.com',
  projectId: 'notice-board-31d92'
});

// Initialize Cloud Firestore through Firebase
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/posts', (req, res) => {
  firestore
    .collection('posts')
    .get()
    .then(querySnapshot => {
      let posts = {};
      querySnapshot.forEach(doc => {
        posts[doc.id] = doc.data();
      });

      res.json(Object.values(posts));
    });
});

app.get('/posts/:id', (req, res) => {
  console.log(req.params);
  firestore
    .doc(`/posts/${req.params.id}`)
    .get()
    .then(doc => {
      res.json([doc.data()]);
    });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`listening on ${port}`);
