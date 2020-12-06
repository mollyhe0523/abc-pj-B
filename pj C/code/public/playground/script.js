console.log("hi");
let noteId = 0;

let textbox = document.getElementById("paper");

let paper = document.getElementById("paper");
let config = document.getElementById("config-container");
let btnSubmit = document.getElementById("btnSubmit");

let inputColor = document.getElementById("input-color");
let inputSize = document.getElementById("input-size");

paper.addEventListener("click", handlePaperClick);

btnSubmit.addEventListener("click", () => {
  submit();
});
inputColor.addEventListener("input", () => {
  textbox.style.color = inputColor.value;
});
inputSize.addEventListener("input", () => {
  textbox.style.fontSize = inputSize.value + "px";
});

function handlePaperClick(e) {
  noteId += 1;
  x = e.clientX;
  y = e.clientY;
  createTextbox(x, y);
  paper.removeEventListener("click", handlePaperClick);
  showConfig();
}

function createTextbox(x, y) {
  textbox = document.createElement("textarea");
  textbox.id = "textbox" + noteId;
  // textbox is resizable
  textbox.style.cssText = "position: absolute; top: "+y+"px; height: "+x+"px; cursor: move; background-color: transparent; border: 2px solid; padding: 20px; width: 300px; resize: both; overflow: hidden; font-size: 12px"
  // textbox is draggable

  // append textbox to paper
  paper.appendChild(textbox);
  initDrag(textbox);
}

function showConfig() {
  // let btnSubmit = document.createElement("button");
  // btnSubmit.id = "btnSubmit";
  // btnSubmit.innerHTML = "submit";
  // btnSubmit.style.cssText = "position: absolute; cursor: pointer; background-color: white; border: 2px solid; padding: 20px; height: 50px; width: 100px";
  // config.appendChild(btnSubmit);

  config.style.visibility = "visible";

}

function initDrag(el) {
  // https://www.w3schools.com/howto/howto_js_draggable.asp

  console.log("initDrag");
  // Make the DIV element draggable:
  dragElement(el);

  function dragElement(el) {
    console.log("dragElement");
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(el.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(el.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      el.addEventListener("mousedown", dragMouseDown)
    }

    function dragMouseDown(e) {
      console.log("dragMouseDown");
      e = e || window.event;
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.body.addEventListener("mouseup", closeDragElement);
      el.addEventListener("mouseup", closeDragElement);

      // el.addEventListener("mouseleave", closeDragElement);
      // document.onmouseup = closeDragElement;

      // call a function whenever the cursor moves:
      document.body.addEventListener("mousemove", elementDrag)
      el.addEventListener("mousemove", elementDrag)

      // document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      console.log("elementDrag");
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      el.style.top = (el.offsetTop - pos2) + "px";
      el.style.left = (el.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      console.log("closeDragElement");
      // stop moving when mouse button is released:
      // el.removeEventListener("mouseup", (e) => {
      //   closeDragElement(e)
      // });
      el.removeEventListener("mousemove", elementDrag);
      document.body.removeEventListener("mousemove", elementDrag);
      document.body.removeEventListener("mouseup", closeDragElement);
      el.removeEventListener("mouseup", closeDragElement);
      // document.onmouseup = null;
      // document.onmousemove = null;
    }
  }
}

function submit() {
console.log("color:" + inputColor.value + "; font-size:" + inputSize.value + "px; position: absolute; top: " + textbox.offsetTop + "px; left:" + textbox.offsetLeft + "px;")

  // let text = document.createElement("textarea");
  // text.innerHTML = textbox.value;
  // text.style.cssText = "color:" + inputColor.value + "; font-size:" + inputSize.value + "px; position: absolute; top: " + textbox.offsetTop + "px; left:" + textbox.offsetLeft + "px;";
  // paper.appendChild(text);
  // paper.removeChild(textbox);
  // text.readonly = true;
  // // textbox.style.resize = "none";
  // // textbox.style.cursor = "auto";
  // inputColor.value = "#000000";
  // inputSize.value = 12;
  // paper.addEventListener("click", handlePaperClick);
}
