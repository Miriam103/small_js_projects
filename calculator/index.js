var currentEquation = "";
var currentNumber = "";
var inputs = [];

function resolveEquation() {
  console.log(inputs);
  // calulcate the results of the * and / operator first
  inputs.forEach(function (input, index) {
    if (isNaN(input)) {
      if (input === "x") {
        const a = parseFloat(inputs[index - 1]);
        const b = parseFloat(inputs[index + 1]);
        const result = a * b;
        inputs[index - 1] = "o";
        inputs[index] = "o";
        inputs[index + 1] = result;
      } else if (input === "/") {
        const a = parseFloat(inputs[index - 1]);
        const b = parseFloat(inputs[index + 1]);
        const result = a / b;
        inputs[index + 1] = result;
        inputs[index - 1] = "o";
        inputs[index] = "o";
      }
    }
  });

  inputs = inputs.filter((element) => element !== "o");

  var endResult = 0;
  // if only one number left its the end result
  if (inputs.length === 1) {
    endResult = inputs[0];
  }
  // otherwise calculate the results of the + and - operator second
  inputs.forEach(function (input, index) {
    if (isNaN(input)) {
      if (input === "+") {
        const a = parseFloat(inputs[index - 1]);
        const b = parseFloat(inputs[index + 1]);
        const result = a + b;
        endResult = endResult + result;
        console.log(result);
      } else if (input === "-") {
        const a = parseFloat(inputs[index - 1]);
        const b = parseFloat(inputs[index + 1]);
        const result = a - b;
        endResult = endResult + result;
        console.log(result);
      }
    }
  });

  document.querySelector(".result-display").textContent = endResult;
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
    console.log(currentEquation);
  } else if ("=" === text) {
    inputs.push(currentNumber);
    currentNumber = "";
    resolveEquation();
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
