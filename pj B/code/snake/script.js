let button=document.getElementById("button");
let button2=document.getElementById("button2");
let snake=document.getElementById("snake");
let nodes = snake.getElementsByClassName("node");

button.addEventListener("click",()=>{
  console.log("go");
  // go();
  let firstNode = nodes[mySnake.head];
  console.log(firstNode);
  firstNode.style.visibility="hidden";
  // let lastNode = nodes[nodes.length-1];
  newNode=createNewNode(mySnake.length);
  // console.log(newNode);
  mySnake.head += 1;
  mySnake.length += 1;

  })


button2.addEventListener("click",()=>{
  console.log("stop");
  // stop();
  })


var mySnake = {
  direction: "RT", //LT,RT,UP,DW
  length:4,
  head: 0,
  nodes: {}
};

initSnake();

function initSnake(){
  for(let i=0;i<4;i++){
    createNewNode(i);
  }
}

function createNewNode(i){
  let newNode=document.createElement("div");
  newNode.className="node";
  newNode.innerHTML = i;
  snake.appendChild(newNode);
  return newNode;
}
