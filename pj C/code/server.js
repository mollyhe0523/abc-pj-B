let express =require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

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
var paperListRef = database.ref("paperList");
var messageListRef = database.ref("papers");
paperListRef.set({
  count:0
})

app.use(express.static('public'));


io.on('connection', (socket) => {
  console.log('a user connected',socket.id);

  //Beginning: get data history
  paperListRef.once('value').then((snapshot)=>{
    let archivalData = snapshot.val();
    socket.emit('paper-list-data',archivalData.count);
  })

  messageListRef.once('value').then((snapshot)=>{
    console.log(snapshot.val());
    let archivalData = snapshot.val();
    socket.emit('archival-data',archivalData);
  })


  //deal with paper list, userful for tracking available paper
  socket.on('new-paper', () => {
    paperListRef.once('value').then((snapshot)=>{
      let paperCount = snapshot.val().count;
      paperCount++;
      let paperName = "p"+paperCount;
      paperListRef.update({
        count: paperCount,
      })
      paperListRef.push({paperName:paperName, active: "y"})
      io.emit("new-paper-to-all",paperCount);
    })
  });

  //record message to database, broadcast
  socket.on('message-from-one', (msg) => {
    messageListRef.push(msg);
    io.emit("message-to-all",msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected',socket.id);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
