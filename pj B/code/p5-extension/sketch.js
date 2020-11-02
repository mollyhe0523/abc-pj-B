console.log("yo");

var s= function(sketch){
  sketch.setup=function(){
    let c=sketch.createCanvas(sketch.windowWidth,sketch.windowHeight);
    c.position(0,0);
    sketch.clear();
  }
  sketch.draw=function(){
    // background(0,255,255);
    sketch.stroke(0);
    sketch.strokeWeight(4);
    if (sketch.mouseIsPressed) {
      sketch.line(sketch.mouseX,sketch.mouseY,sketch.pmouseX,sketch.pmouseY);
    }
  }
}

var myp5 = new p5(s);
