console.log("hi");

let socket = io();
// let namebox = document.getElementById('name');
// let chatbox = document.getElementById('chat');
let messagebox = document.getElementById('message');
let red = document.getElementById('red');
let blue = document.getElementById('blue');
let p1 = document.getElementById('p1');
let sendbutton = document.getElementById('send');
// let usercount = document.getElementById("usercount");
let color = "black";

sendbutton.addEventListener("click",()=>{
  console.log(red.checked);
  if (red.checked == true){
    color = "red";
  }else if (blue.checked == true){
    color = "blue";
  }

  let message = messagebox.value.trim();
  if (message != ""){
    let data = {message: message, color: color};
    socket.emit('message-from-one',data);
    // console.log(data);
  }
  messagebox.value = "";
})

// function updateUserCount (data){
//   let count = data.count;
//   usercount.innerHTML = count-1;
// }

socket.on("message-to-all",(data)=>{
  console.log(data);
  let color= data.color;
  let message = data.message;
  appendMessage(color,message);
})

function appendMessage(color,message){
  let div = document.createElement("div");
  let p = document.createElement("p");
  p.innerHTML = message;
  div.style.color = color;
  div.appendChild(p);
  p1.appendChild(div);
  // chatbox.scrollTop = chatbox.scrollHeight;
}

// socket.on('new-user-count',(data)=>{
//   updateUserCount(data);
// })

socket.on('archival-data',(data)=>{
  if (data!=null){
    let keys=Object.keys(data);
    for(let i=0; i<keys.length; i++){
      let key = keys[i];
      let datapoint = data[key];
      appendMessage(datapoint.color,datapoint.message);
    }
  }
})

messagebox.addEventListener("keyup",(event)=>{
  if (event.keyCode == 13){
    sendbutton.click();
  }
})
