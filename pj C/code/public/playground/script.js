console.log("hi");
// let paper = document.getElementById("paper");
// let noteId = 0; // keep track of the numbder of notes
// let textbox = document.getElementById("paper"); // will be redeclared later
//
// let config = document.getElementById("config-container");
// let inputColor = document.getElementById("input-color");
// let inputSize = document.getElementById("input-size");
// let btnSubmit = document.getElementById("btnSubmit");
//
// let borderWidth = 1;

// paper.addEventListener("click", handlePaperClick);

// inputColor.addEventListener("input", () => {
//   textbox.style.color = inputColor.value;
// });
// inputSize.addEventListener("input", () => {
//   textbox.style.fontSize = inputSize.value + "px";
// });

btnSubmit.addEventListener("click", () => {
  submit();
  // resetConfig();
  // hideConfig();
  resetPaper();
});

// function handlePaperClick(e) {
//   noteId += 1;
//   x = e.clientX;
//   y = e.clientY;
//   createTextbox(x, y, noteId);
//   paper.removeEventListener("click", handlePaperClick);
//   // resetConfig();
//   // showConfig();
// }

// function createTextbox(x, y, noteId) {
//   textbox = document.createElement("textarea");
//   textbox.id = "textbox" + noteId;
//   textbox.style.cssText = "position: absolute; top: "+y+"px; left: "+x+"px; cursor: move; background-color: transparent; border: "+borderWidth+"px solid #ccc; border-radius: 4px; padding: 0px; width: 300px; resize: both; overflow: hidden; font-size: 12px; font-family: Helvetica" // style needs change
//   paper.appendChild(textbox);
//   textbox.addEventListener("mousedown", initDrag);
//   // https://www.w3schools.com/howto/howto_js_draggable.asp
// }

// function showConfig() {
//   config.style.visibility = "visible";
// }
// function hideConfig() {
//   config.style.visibility = "hidden";
// }
// function resetConfig() {
//   inputColor.value = "#000000";
//   inputSize.value = 12;
// }

function resetPaper() {
  paper.addEventListener("click", handlePaperClick);
}

// function initDrag(e) {
//   el = textbox;
//   console.log("initDrag");
//   let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   // move the DIV from anywhere inside the DIV:
//   if (!(( (el.offsetTop + el.offsetHeight - e.clientY) <= 15) && ( (el.offsetLeft + el.offsetWidth - e.clientX) <= 15) ))
//   {
//     el.addEventListener("mousedown", dragMouseDown);
//   }
// }

// function dragMouseDown(e) {
//   el = textbox;
//   console.log("dragMouseDown");
//   e = e || window.event;
//   // get the mouse cursor position at startup:
//   pos3 = e.clientX;
//   pos4 = e.clientY;
//   if (!(( (el.offsetTop + el.offsetHeight - e.clientY) <= 15) && ( (el.offsetLeft + el.offsetWidth - e.clientX) <= 15) )) {
//     document.body.addEventListener("mousemove", elementDrag);
//     el.addEventListener("mousemove", elementDrag);
//
//     document.body.addEventListener("mouseup", closeDragElement);
//     el.addEventListener("mouseup", closeDragElement);
//   }
//
// }

// function elementDrag(e) {
//   el = textbox;
//   console.log("elementDrag");
//   e = e || window.event;
//   e.preventDefault();
//   // calculate the new cursor position:
//   pos1 = pos3 - e.clientX;
//   pos2 = pos4 - e.clientY;
//   pos3 = e.clientX;
//   pos4 = e.clientY;
//   console.log("clientX: "+pos3+" clientY:"+pos4);
//   // set the element's new position:
//   el.style.top = (el.offsetTop - pos2) + "px";
//   el.style.left = (el.offsetLeft - pos1) + "px";
// }
//
// function closeDragElement() {
//   el = textbox;
//   console.log("closeDragElement");
//
//   el.removeEventListener("mousemove", elementDrag);
//   document.body.removeEventListener("mousemove", elementDrag);
// }


function submit() {
  console.log("color:" + inputColor.value + "; font-size:" + inputSize.value + "px; position: absolute; top: " + textbox.offsetTop + "px; left:" + textbox.offsetLeft + "px;");

  // text = document.createElement("textarea");
  // text.innerHTML = textbox.value;
  // text.style.cssText = "color:" + inputColor.value + "; font-size:" + inputSize.value + "px; position: absolute; top: " + textbox.offsetTop + "px; left:" + textbox.offsetLeft + "px;";
  // paper.appendChild(text);
  // paper.removeChild(textbox);
  // text.readonly = true;
  textbox.style.resize = "none";
  textbox.style.cursor = "auto";
  textbox.readOnly = true;

  textbox.style.border = "0";
  textbox.style.top = textbox.offsetTop + borderWidth + "px";
  textbox.style.left = textbox.offsetLeft + borderWidth + "px";

  textbox.removeEventListener("mousedown", dragMouseDown);
  document.body.removeEventListener("mouseup", closeDragElement);
  textbox.removeEventListener("mouseup", closeDragElement);

  let pctPosX = ( textbox.offsetLeft - paper.offsetLeft ) / paper.offsetWidth;
  let pctPosY = ( textbox.offsetTop - paper.offsetTop ) / paper.offsetHeight;
  //
  // paper.style.top = paper.offsetTop + 10 + "px";
  // paper.style.left = paper.offsetLeft; + 10 + "px";
  //
  // textbox.style.top = paper.offsetTop + pctPosX + "px";
  // textbox.style.left = paper.offsetLeft; + pctPosY + "px";

}
