import { calc } from "./modules/math.js";

const form = document.querySelector('form');
const firstInput = document.querySelector('.input-1');
const secondInput = document.querySelector('.input-2');
const operatorNode = document.querySelector('.select-operator');
const output = document.querySelector('.output-value');
const historyBox = document.querySelector('.history-result');

function outputResult(e) {
  e.preventDefault();

  const num1 = Number(firstInput.value);
  const num2 = Number(secondInput.value);
  const operator = operatorNode.value;

  const result = calc(num1, num2, operator);

  output.classList.add('result-color');

  if(Number.isInteger(result)) {
    output.textContent = result;
    addResultToHistory(result);
  } else {
    output.textContent = result.toFixed(3);
    addResultToHistory(result.toFixed(3));
  }
}

function addResultToHistory(res) {
  const div = document.createElement('div');
  div.classList.add('history-item');
  div.textContent = res;
  historyBox.append(div);
}

function deleteResultOfHistory(e) {
  if(e.target.className === 'history-item') {
    const elem = e.target;
    elem.remove();
  }
}

form.addEventListener('submit', (e) => outputResult(e));
historyBox.addEventListener('click', (e) => deleteResultOfHistory(e));