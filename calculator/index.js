var currentEquation = "";
var currentNumber = "";
var inputs = [];

function resolveEquation(inputs) {
  for(let i =0;i<=1;i++)
  {
    inputs.forEach(function (input, index) {
      if(input ==="x"){
        const left = Number(inputs[index-1]);
        const right = Number(inputs[index+1]);
        var result = left*right;
        inputs[index-1]=result;
        inputs.splice(index,2);
      }
      else if(input ==="/"){
        const left = Number(inputs[index-1]);
        const right = Number(inputs[index+1]);
        var result = left/right;
        inputs[index-1]=result;
        inputs.splice(index,2);
      }
    });
  }

  result = inputs[0];
  inputs.forEach(function(input, index){
    if (input ==="+"){
      result = Number(result) + Number(inputs[index+1]);
    }
    else if(input ==="-"){
      result = Number(result) -  Number(inputs[index+1]);
    }
  });

  return result;
}

function addNewInput(text) {
  if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(text)) {
    currentEquation = currentEquation + text;
    const display = document.querySelector(".input-display");
    display.textContent = currentEquation;
    currentNumber = currentNumber + text;
  } else if (["/", "W", "x", "x2", "-", "%", "+"].includes(text)) {
    currentEquation = currentEquation + text;
    const display = document.querySelector(".input-display");
    display.textContent = currentEquation;
    inputs.push(currentNumber);
    currentNumber = "";
    inputs.push(text);
  } else if ("=" === text) {
    inputs.push(currentNumber);
    currentNumber = "";
    const endResult = resolveEquation(inputs);
    document.querySelector(".result-display").textContent = endResult;
  } else if ("C" === text) {
    currentEquation = "";
    currentNumber = "";
    inputs = [];
    document.querySelector(".input-display").textContent = "";
    document.querySelector(".result-display").textContent = "";
  } else {
    console.error("unknown input");
  }
}

const inputButtons = [
  "7",
  "8",
  "9",
  "/",
  "W",
  "4",
  "5",
  "6",
  "x",
  "x2",
  "1",
  "2",
  "3",
  "-",
  "=",
  "0",
  ",",
  "%",
  "C",
  "+",
];

if (typeof module !== "undefined") {
  module.exports = { resolveEquation};
} else {
  const buttons = document.querySelector(".input-buttons");
  var counter = 0;

  inputButtons.forEach(function (text) {
    const newButton = document.createElement("button");
    newButton.textContent = text;
    newButton.addEventListener("click", function (event) {
      addNewInput(event.target.textContent);
    });
    buttons.appendChild(newButton);
    counter = counter + 1;
    if (counter % 5 === 0) {
      buttons.appendChild(document.createElement("br"));
    }
});
}