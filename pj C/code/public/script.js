let socket = io();
let p1 = document.getElementById('p1');
let rollButton = document.getElementById('rollButton');
let sendButton = document.getElementById('sendButton');
let closeButton = document.getElementById('closeButton');
let notesgroundWrapper = document.getElementById('notesgroundWrapper');
let writingPage = document.getElementById('writingPage');
let messagebox = document.getElementById('message');
let color = document.getElementById('input-color');
let font = document.getElementById('select-font');
let size = document.getElementById('input-size');
let paperWrapper = document.getElementById('paperWrapper');

state = "p1"
paperCount = 1;

rollButton.addEventListener("click",()=>{
  socket.emit("new-paper");
})

socket.on("new-paper-to-all",(count)=>{
  appendPaper(count);
})

function appendPaper(i){
  let newPaper = document.createElement("img");
  newPaper.id = "p"+paperCount;
  newPaper.className = "paper";
  newPaper.src = "img/folded.png";
  paperCount++;
  notesgroundWrapper.appendChild(newPaper);

  destX = Math.random()*90;
  destY = Math.random()*80;
  width = 5 + destY/8;

  var cssAnimation = document.createElement('style');
  cssAnimation.type = 'text/css';
  if (paperCount%2 == 0){
    var rules = document.createTextNode('@keyframes move'+paperCount+
    '{from { left:-10px; } to { left:'+destX+'vw }}');
  }else{
    var rules = document.createTextNode('@keyframes move'+paperCount+
    '{from { right:-10px; } to { right:'+destX+'vw }}');
  }
  cssAnimation.appendChild(rules);
  document.getElementsByTagName("head")[0].appendChild(cssAnimation);

  newPaper.style.width = width + "vw";
  newPaper.style.top = destY + "vh";
  if (paperCount%2 == 0){
    newPaper.style.animation = "1s linear 5 spin1, 5s linear 1 forwards move"+paperCount;
  }else{
    newPaper.style.animation = "1s linear 5 spin2, 5s linear 1 forwards move"+paperCount;
  }

  newPaper.addEventListener("click",()=>{
    notesgroundWrapper.style.visibility="hidden";
    rollButton.style.visibility="hidden";
    writingPage.style.visibility="visible";
    state=newPaper.id;
    socket.emit('get-content',state);
    console.log("emitted get-content")

    sendButton.addEventListener("click",()=>{
      // writingPage.style.visibility="hidden";
      // notesgroundWrapper.style.visibility="visible";
      let message = messagebox.value.trim();
      if (message != ""){
        let data = {paper: state, color: color.value, font: font.value, size: size.value, message: message};
        socket.emit('message-from-one',data);
      }
      messagebox.value = "";

    })

    closeButton.addEventListener("click",()=>{
      writingPage.style.visibility="hidden";
      notesgroundWrapper.style.visibility="visible";
      rollButton.style.visibility="visible";
      content.remove();
      console.log("removed");
      let newDiv = document.createElement("div");
      newDiv.id="content";
      paperWrapper.prepend(newDiv)
    })

    console.log("This is "+newPaper.id);
  })
}

socket.on("message-to-all",(data)=>{
  console.log(data);
  let paper = data.paper;
  let color = data.color;
  let font = data.font;
  let size = data.size;
  let message = data.message;
  if (state == paper){
    appendMessage(color,font,size,message);
  }
})

function appendMessage(color,font,size,message){
  let div = document.createElement("div");
  let p = document.createElement("p");
  p.innerHTML = message;
  div.style.color = color;
  p.style.fontFamily = font;
  div.style.fontSize = size+"px";
  div.className = "textDiv";
  div.style.left = Math.random()*60+"vh";
  div.style.top = Math.random()*70+"vh";
  div.appendChild(p);
  let content = document.getElementById('content');
  content.append(div);
  console.log("got message")
}


socket.on('paper-list-data',(count)=>{
  if (count!=null){
    for (let i=1; i<=count; i++){
      appendPaper(i);
    }
  }
})

socket.on('archival-data',(dataList)=>{
  if (dataList!=null){
    for(let i=0; i<dataList.length; i++){
      datapoint = dataList[i];
      appendMessage(datapoint.color,datapoint.font,datapoint.size,datapoint.message);
    }
  }
})
