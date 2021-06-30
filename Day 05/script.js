"use strict";

const screen = document.getElementById("solution");
const buttons = document.getElementsByClassName("button");

let screenValue = "";
let buttonText;

for (const item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "RESET") {
      screenValue = "";
      screen.innerText = screenValue;
    } else if (buttonText == "=") {
      screenValue = screen.innerText;
      screen.innerText = eval(screenValue);
    } else if (buttonText == "DEL") {
      screenValue = screen.innerText;
      let newData = Array.from(screenValue);
      newData.pop();
      let upDatedData = newData.toString().replace(/,/g, "");
      screen.innerText = upDatedData;
    } else {
      screenValue = screen.innerText;
      screenValue += buttonText;
      screen.innerText = screenValue;
    }
  });
}
