function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

let first = '';
let second = '';
let operator = '';

function operate(x, y, op) {
    switch (op) {
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case '*':
            return multiply(x, y);
        case '/':
            return divide(x, y);
        default:
            return 0;
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const screen = document.querySelector('.display');

    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const className = button.className;

            if (className.includes('one')) appendNumber('1');
            else if (className.includes('two')) appendNumber('2');
            else if (className.includes('three')) appendNumber('3');
            else if (className.includes('four')) appendNumber('4');
            else if (className.includes('five')) appendNumber('5');
            else if (className.includes('six')) appendNumber('6');
            else if (className.includes('seven')) appendNumber('7');
            else if (className.includes('eight')) appendNumber('8');
            else if (className.includes('nine')) appendNumber('9');
            else if (className.includes('zero')) appendNumber('0');
            else if (className.includes('add')) setOperator('+');
            else if (className.includes('subtract')) setOperator('-');
            else if (className.includes('multiply')) setOperator('*');
            else if (className.includes('divide')) setOperator('/');
            else if (className.includes('clear')) clearCalculator();
            else if (className.includes('equals')) calculateResult();
        });
    });

    function appendNumber(number) {
        if (operator === '') {
            first += number;
            screen.textContent = first;
        } else {
            second += number;
            screen.textContent = second;
        }
    }

    function setOperator(op) {
        if (first !== '') {
            operator = op;
            screen.textContent = op;
        }
    }

    function clearCalculator() {
        first = '';
        second = '';
        operator = '';
        screen.textContent = '0';
    }

    function calculateResult() {
        if (first !== '' && second !== '' && operator !== '') {
            const result = operate(parseFloat(first), parseFloat(second), operator);
            screen.textContent = result;
            first = result.toString();
            second = '';
            operator = '';
        }
    }
});