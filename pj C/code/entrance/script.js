p1 = document.getElementById('p1');
rollButton = document.getElementById('rollButton');
sendButton = document.getElementById('sendButton');
closeButton = document.getElementById('closeButton');

notesgroundWrapper = document.getElementById('notesgroundWrapper');
writingPage = document.getElementById('writingPage');

paperCount = 1;

rollButton.addEventListener("click",()=>{
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
    writingPage.style.visibility="visible";

    console.log("hello this is "+newPaper.id);
  })

})

sendButton.addEventListener("click",()=>{
  writingPage.style.visibility="hidden";
  notesgroundWrapper.style.visibility="visible";
})
closeButton.addEventListener("click",()=>{
  writingPage.style.visibility="hidden";
  notesgroundWrapper.style.visibility="visible";
})
