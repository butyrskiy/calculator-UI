const form = document.querySelector('form');
const firstInput = document.querySelector('.input-1');
const secondInput = document.querySelector('.input-2');
const operatorNode = document.querySelector('.select-operator');
const resultBtn = document.querySelector('.result-btn');
const output = document.querySelector('.output-value');

function calc(a, b, operator) {
  switch(operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const num1 = Number(firstInput.value);
  const num2 = Number(secondInput.value);
  const operator = operatorNode.value;

  const result = calc(num1, num2, operator);

  if(Number.isInteger(result)) {
    output.textContent = result;
  } else {
    output.textContent = result.toFixed(2);
  }
});