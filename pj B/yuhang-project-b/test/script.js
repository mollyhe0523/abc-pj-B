// Task A: find all HTML elements before initiating the snake

  // create total list
  let total_list = [];

  // find image list and append to total list
  let img_list = document.querySelectorAll("img");
  console.log(img_list);
  img_list.forEach((img_el, i) => {
    total_list.push(img_el);
  });

  // find word list
    // find p list
    let p_list = document.querySelectorAll("p");
    // // create word list
    // let span_list = [];
    // turn p into spans, creds: leoneckert, "text-rain"
    p_list.forEach((p_el, i) => {
      // find words in p element
      let text = p_el.innerHTML;
      // empty p element
      p_el.innerHTML = "";
      // split words into spans and give it back to p element
      let words = text.split(" ");
      words.forEach((word, i) => {
        let wordspan = document.createElement("span");
        wordspan.innerHTML = word + " ";
        p_el.appendChild(wordspan);
      });
    });

  // find span list and append to total list
  let span_list = document.querySelectorAll("span");
  console.log(span_list);
  span_list.forEach((span_el, i) => {
    total_list.push(span_el);
  });


// Task B: collision detection, mouse simulating snake head
  pixel = 5

  window.addEventListener("mousemove", ()=> {
    // get the coordinates of snake head
    let x = event.clientX;
    let y = event.clientY;
    console.log("x: "+x+",y: "+y);

    // collision detection: span
    span_list.forEach( (span) => {
        if ( ( ( y < span.getBoundingClientRect().top) && ( y > span.getBoundingClientRect().bottom) || ( y + pixel < span.getBoundingClientRect().bottom) && ( y + pixel > span.getBoundingClientRect().top) ) && ( (x >span.getBoundingClientRect().left) && (x < span.getBoundingClientRect().right) ||      (x+pixel <span.getBoundingClientRect().right) && (x+pixel > span.getBoundingClientRect().left) ) ) {
          span.style.visibility = "hidden"; // hide the element once run into
          //add score here
        }
    });

    // collision detection: image
    img_list.forEach( (img) => {
        if ( ( ( y < img.getBoundingClientRect().top) && ( y > img.getBoundingClientRect().bottom) || ( y + pixel < img.getBoundingClientRect().bottom) && ( y + pixel > img.getBoundingClientRect().top) ) && ( (x >img.getBoundingClientRect().left) && (x < img.getBoundingClientRect().right) ||      (x+pixel <img.getBoundingClientRect().right) && (x+pixel > img.getBoundingClientRect().left) ) ) {
          img.style.visibility = "hidden"; // hide the element once run into
          // add score here
        }
    });

  });

// task C: highlight the fruit

// image highlight: box shadow
 let fruit1 = img_list[0];
 let animation1 = fruit1.animate([{},{ boxShadow: "#ef9702 0px 0px 5px, #ef9702 0px 0px 10px, #ef9702 0px 0px 15px, #ef9702 0px 0px 20px, #ef9702 0px 0px 30px, #ef9702 0px 0px 10px, #ef9702 0px 0px 50px, #ef9702 0px 0px 75px" },{}],{duration: 3000, iterations: Infinity});

// text highlight option 1: text shadow
let fruit2 = span_list[10];
let animation2 = fruit2.animate([{},{ textShadow: "#ef9702 0px 0px 5px, #ef9702 0px 0px 10px, #ef9702 0px 0px 15px, #ef9702 0px 0px 20px, #ef9702 0px 0px 30px, #ef9702 0px 0px 10px, #ef9702 0px 0px 50px, #ef9702 0px 0px 75px" },{}],{duration: 3000, iterations: Infinity});

// text highlight option 2: background color
let fruit3 = span_list[8];
let animation3 = fruit2.animate([{},{ backgroundColor: "#ef9702" },{}],{duration: 3000, iterations: Infinity});
