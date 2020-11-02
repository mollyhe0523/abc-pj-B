let numSegments = 10;
let direction = 'right';

const xStart = 0; // 蛇的初始 x 坐标
const yStart = 20; //蛇的初始 y 坐标
const diff = 10;

let xCor = [];
let yCor = [];

let xFruit = 100;
let yFruit = 100;
let scoreElem;

function setup() {
  scoreElem = createDiv('Score = 0');
  scoreElem.position(20, 20);
  scoreElem.id = 'score';
  scoreElem.style('color', 'orange');

  createCanvas(windowWidth,windowHeight);
  frameRate(15);
  stroke(0);
  strokeWeight(10);

  for (let i = 0; i < numSegments; i++) {
      xCor.push(xStart + i * diff);
      yCor.push(yStart);
    }
  }

function draw() {
 // clear();
   background(255);
   for (let i = 0; i < numSegments - 1; i++) {
     line(xCor[i], yCor[i], xCor[i + 1], yCor[i + 1]);
   }
   updateSnakeCoordinates();
   checkGameStatus();
   checkForFruit();
}

function updateSnakeCoordinates() {
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
}
function checkGameStatus() {
  if (
    xCor[xCor.length - 1] > width ||
    xCor[xCor.length - 1] < 0 ||
    yCor[yCor.length - 1] > height ||
    yCor[yCor.length - 1] < 0 ||
    checkSnakeCollision()
  ) {
    noLoop();
    const scoreVal = parseInt(scoreElem.html().substring(8));
    scoreElem.html('Game ended! Your score was : ' + scoreVal);
  }
}

/*
 如果蛇碰到自己，说明蛇头的 (x,y) 坐标和它自身的小段之一的 (x,y) 坐标相同。
*/
function checkSnakeCollision() {
  const snakeHeadX = xCor[xCor.length - 1];
  const snakeHeadY = yCor[yCor.length - 1];
  for (let i = 0; i < xCor.length - 1; i++) {
    if (xCor[i] === snakeHeadX && yCor[i] === snakeHeadY) {
      return true;
    }
  }
}

function checkForFruit() {
  point(xFruit, yFruit);
  if (xCor[xCor.length - 1] === xFruit && yCor[yCor.length - 1] === yFruit) {
    const prevScore = parseInt(scoreElem.html().substring(8));
    scoreElem.html('Score = ' + (prevScore + 1));
    xCor.unshift(xCor[0]);
    yCor.unshift(yCor[0]);
    numSegments++;
    updateFruitCoordinates();
  }
}

function updateFruitCoordinates() {
  /*
    这里的数学逻辑是因为我希望这个点位于 100 和 width-100 之间，并四舍五入到
    10 的倍数 ，因为蛇以 10 的倍数移动。
  */

  xFruit = floor(random(10, (width - 100) / 10)) * 10;
  yFruit = floor(random(10, (height - 100) / 10)) * 10;
}

function keyPressed() {
  // console.log()
  switch (keyCode) {
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
