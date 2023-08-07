const form = document.querySelector('form');
const firstInput = document.querySelector('.input-1');
const secondInput = document.querySelector('.input-2');
const operatorNode = document.querySelector('.select-operator');
const resultBtn = document.querySelector('.result-btn');
const output = document.querySelector('.output-value');
const historyBox = document.querySelector('.history-result');

function calc(a, b, operator) {
  switch(operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
  }
}

function outputResult(e) {
  e.preventDefault();

  const num1 = Number(firstInput.value);
  const num2 = Number(secondInput.value);
  const operator = operatorNode.value;

  const result = calc(num1, num2, operator);

  if(Number.isInteger(result)) {
    output.textContent = result;
    addResultToHistory(result);
  } else {
    output.textContent = result.toFixed(2);
    addResultToHistory(result.toFixed(2));
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