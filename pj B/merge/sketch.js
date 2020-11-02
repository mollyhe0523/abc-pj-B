console.log("yo");

function go(){
  document.body.style.overflow="hidden";
}
// console.log(scrollTop);

var s= function(sketch){
  let scrollTop=window.scrollY;
  let scrollLeft=window.scrollX;

  let numSegments = 10;
  let direction = 'right';

  const xStart = 0; // 蛇的初始 x 坐标
  const yStart = 20; //蛇的初始 y 坐标
  const diff = 5;

  let xCor = [];
  let yCor = [];

  let xFruit = 100;
  let yFruit = 100;
  let scoreElem;

  sketch.setup=function(){
    scoreElem = sketch.createDiv('Score = 0');
    scoreElem.position(scrollLeft+20, scrollTop);
    scoreElem.id = 'score';
    scoreElem.style('color', 'orange');
    scoreElem.style('z-index','100');


    let c=sketch.createCanvas(sketch.windowWidth,sketch.windowHeight);
    c.position(scrollLeft,scrollTop);
    c.style('z-index','100');
    sketch.clear();
    sketch.frameRate(15);
    sketch.stroke(0);
    sketch.strokeWeight(10);
    for (let i = 0; i < numSegments; i++) {
        xCor.push(xStart + i * diff);
        yCor.push(yStart);
      }

  }
  sketch.draw=function(){
    // sketch.background(255);
    sketch.clear();
    for (let i = 0; i < numSegments - 1; i++) {
      sketch.line(xCor[i], yCor[i], xCor[i + 1], yCor[i + 1]);
    }
    sketch.updateSnakeCoordinates();
    sketch.checkGameStatus();
    sketch.checkForFruit();

}
  sketch.updateSnakeCoordinates=function(){
    for (let i = 0; i < numSegments - 1; i++) {
      xCor[i] = xCor[i + 1];
      yCor[i] = yCor[i + 1];
    }
    switch (direction) {
      case 'right':
        xCor[numSegments - 1] = xCor[numSegments - 2] + diff;
        yCor[numSegments - 1] = yCor[numSegments - 2];
        break;
      case 'up':
        xCor[numSegments - 1] = xCor[numSegments - 2];
        yCor[numSegments - 1] = yCor[numSegments - 2] - diff;
        break;
      case 'left':
        xCor[numSegments - 1] = xCor[numSegments - 2] - diff;
        yCor[numSegments - 1] = yCor[numSegments - 2];
        break;
      case 'down':
        xCor[numSegments - 1] = xCor[numSegments - 2];
        yCor[numSegments - 1] = yCor[numSegments - 2] + diff;
        break;
    }

  sketch.checkGameStatus=function() {
    if (
      xCor[xCor.length - 1] > sketch.width ||
      xCor[xCor.length - 1] < 0 ||
      yCor[yCor.length - 1] > sketch.height ||
      yCor[yCor.length - 1] < 0 ||
      sketch.checkSnakeCollision()
    ) {
      sketch.noLoop();
      const scoreVal = parseInt(scoreElem.html().substring(8));
      scoreElem.html('Game ended! Your score was : ' + scoreVal);
    }
  }

  sketch.checkSnakeCollision=function() {
    const snakeHeadX = xCor[xCor.length - 1];
    const snakeHeadY = yCor[yCor.length - 1];
    for (let i = 0; i < xCor.length - 1; i++) {
      if (xCor[i] === snakeHeadX && yCor[i] === snakeHeadY) {
        return true;
      }
    }
  }
  sketch.checkForFruit=function() {
    sketch.point(xFruit, yFruit);
    // console.log(xCor[xCor.length - 1],yCor[yCor.length - 1]);
    if (((xFruit-2) <= xCor[xCor.length - 1]) && (xCor[xCor.length - 1]<= (xFruit+2)) && ((yFruit-2)<= yCor[yCor.length - 1]) && (yCor[yCor.length - 1] <= (yFruit+2)) ) {
      console.log("eat fruit!");
      const prevScore = parseInt(scoreElem.html().substring(8));
      scoreElem.html('Score = ' + (prevScore + 1));
      xCor.unshift(xCor[0]);
      yCor.unshift(yCor[0]);
      numSegments++;
      sketch.updateFruitCoordinates();
    }
  }

  sketch.updateFruitCoordinates=function () {
    xFruit = Math.floor(sketch.random(10, (sketch.width - 100) / 10)) * 10;
    yFruit = Math.floor(sketch.random(10, (sketch.height - 100) / 10)) * 10;
    // console.log(xFruit,yFruit);
    console.log(sketch.width,sketch.height);

  }


  sketch.keyPressed=function(){
    switch (sketch.keyCode) {
      case 37:
        if (direction !== 'right') {
          direction = 'left';
          console.log("left");
        }
        break;
      case 39:
        if (direction !== 'left') {
          direction = 'right';
          console.log("right");

        }
        break;
      case 38:
        if (direction !== 'down') {
          direction = 'up';
          console.log("up");
        }
        break;
      case 40:
        if (direction !== 'up') {
          direction = 'down';
          console.log("down");
        }
        break;
      }
    }
  }
}
function gotMessage(message,sender,sendResponse){
  console.log(message);
  if(message.type == "start"){
    go();
    var myp5 = new p5(s);
    // var x = document.getElementById("myCanvas");
  }else if(message.type == "stop"){
    p5=null;
}
}
chrome.runtime.onMessage.addListener(gotMessage);
