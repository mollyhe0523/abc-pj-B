let btnStart = document.getElementById("btn-start");
let btnStop = document.getElementById("btn-stop");

btnStart.addEventListener("click", ()=>{
  console.log("start");
  chrome.tabs.query({active:true, currentWindow:true},function(tabs){
  chrome.tabs.sendMessage(tabs[0].id,{type:"start"});
  })
  // initiate the game by generating a snake
});

btnStop.addEventListener("click", ()=>{
  console.log("stop");
  chrome.tabs.query({active:true, currentWindow:true},function(tabs){
  chrome.tabs.sendMessage(tabs[0].id,{type:"stop"});
  })
  // initiate the game by generating a snake
});
