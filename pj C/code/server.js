let express =require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
let userCount = 0;

var firebase = require('firebase');
var firebaseConfig = {
  apiKey: "AIzaSyDxPHOov_dOGQDxPNxxAVRU0O7FB-3v1ww",
  authDomain: "note-universe.firebaseapp.com",
  databaseURL: "https://note-universe.firebaseio.com",
  projectId: "note-universe",
  storageBucket: "note-universe.appspot.com",
  messagingSenderId: "838419583563",
  appId: "1:838419583563:web:1335490a2561a99a76b3ce",
  measurementId: "G-863SD8L5LC"
};
let firebaseApp = firebase.initializeApp(firebaseConfig);
let database = firebase.database()
var messageListRef = database.ref("papers");
// var newPostRef = messageListRef.push("HELLO");
// newPostRef.set({
//
// })


app.use(express.static('public'));

io.on('connection', (socket) => {
  messageListRef.once('value').then((snapshot)=>{
    console.log(snapshot.val());
    let archivalData = snapshot.val();
    socket.emit('archival-data',archivalData);
  })


  console.log('a user connected',socket.id);
  userCount ++;
  io.emit('new-user-count', {count: userCount});

  socket.on('message-from-one', (msg) => {
    messageListRef.push(msg);
    io.emit("message-to-all",msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected',socket.id);
    userCount --;
    io.emit('new-user-count', {count: userCount})
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
