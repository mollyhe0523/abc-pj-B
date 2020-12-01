console.log("hi");

let paper = document.getElementById("paper");

paper.addEventListener("click", handlePaperClick);

function handlePaperClick() {
  createTextbox();
  paper.removeEventListener("click", handlePaperClick);
  showConfig();
}



function createTextbox() {
  let textbox = document.createElement("input");
  // textbox is resizable
  textbox.style.cssText = "type: text; border: 2px solid; padding: 20px; width: 300px; resize: both; overflow: hidden;"
  // textbox is draggable

  // append textbox to paper
  paper.appendChild(textbox);
}

function showConfig() {

}
