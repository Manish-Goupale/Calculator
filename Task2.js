const display = document.getElementById('display');

let currentInput = '';
let operation = '';
let operand1 = '';
let operand2 = '';
let operator = '';

function updateDisplay(value) {
    display.textContent = value;
}

function clear() {
    currentInput = '';
    operand1 = '';
    operand2 = '';
    operator = '';
    updateDisplay('0');
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function setOperator(op) {
    if (currentInput === '') return;
    if (operand1 === '') {
        operand1 = currentInput;
    } else {
        operand2 = currentInput;
        calculate();
        operand1 = display.textContent;
    }
    operator = op;
    currentInput = '';
}

function calculate() {
    if (operand1 === '' || currentInput === '') return;
    operand2 = currentInput;
    let result;
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }
    updateDisplay(result);
    operand1 = result;
    currentInput = '';
    operator = '';
}

document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', (e) => {
        appendNumber(e.target.textContent);
    });
});

document.getElementById('clear').addEventListener('click', clear);

document.getElementById('add').addEventListener('click', () => setOperator('+'));
document.getElementById('subtract').addEventListener('click', () => setOperator('-'));
document.getElementById('multiply').addEventListener('click', () => setOperator('*'));
document.getElementById('divide').addEventListener('click', () => setOperator('/'));

document.getElementById('equals').addEventListener('click', calculate);

document.getElementById('decimal').addEventListener('click', () => {
    if (!currentInput.includes('.')) {
        appendNumber('.');
    }
});
