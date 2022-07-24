// Calculator arrow function
let currentDisplay = document.querySelector('.current-display');
let previousDisplay = document.querySelector('previous-display');
const buttons = document.querySelectorAll('button');
const mathOperators = document.querySelectorAll('operator');
const equalButton = document.getElementById('equal');
let operator = '';
let currentNumber = '';
let previousNumber = '';


buttons.forEach(button => button.addEventListener('click', () => {
    switch (button.textContent) {

        case 'C':
            currentNumber = '';
            previousNumber = '';
            operator = '';
            currentDisplay.textContent = 0;
            previousDisplay.textContent = '';
            break;

        case '=':
            if (currentNumber != '' && previousNumber != '') {
                operate();
            }

        default:
            if (previousNumber !== '' && currentNumber !== '' && operator === '') {
                previousNumber = '';
                currentDisplay.textContent = currentNumber;
            }

            if (currentNumber.length <= 11) {
                currentNumber += button.textContent;
                currentDisplay.textContent = currentNumber;
            }
    };
}));

mathOperators.forEach(mathOperator => mathOperator.addEventListener('click', () => {

    if (previousNumber === '') {
        previousNumber = currentNumber;
        operator = mathOperator.innerText;
        previousDisplay.textContent = previousNumber + ' ' + operator;
        currentDisplay.textContent = '0';
        currentNumber = '';
        
    } else if (currentNumber === '') {
        operator = mathOperator.innerText;
        previousDisplay.textContent = previousNumber + ' ' + operator;
        currentDisplay.textContent = '0';
        currentNumber = '';
    } else {
        operate();
        operator = mathOperator.textContent;
        currentDisplay.textContent = '0';
        previousDisplay.textContent = previousNumber + ' ' + operator;
    }
}));

// The operate function
const operate = () => {
    
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);

    switch (operator) {
        case '+':
            previousNumber += currentNumber;
            break;

        case '-':
            previousNumber -= currentNumber;
            break;

        case '*':
            previousNumber *= currentNumber;
            break;

        case '/':
            if (currentNumber <= 0) {
                previousNumber = 'Error';
                displayResults();
                return;
            };
            previousNumber /= currentNumber;
            break;

    };

    previousNumber = Math.round(previousNumber * 100000) / 100000;
    previousNumber = previousNumber.toString();
    displayResults();
};

const displayResults = () => {
    if (previousNumber.length <= 11) {
        currentDisplay.textContent = previousNumber;
    } else {
        currentDisplay.textContent = previousNumber.slice(0, 22) + '...';
    }

    previousDisplay.textContent = '';
    operator = '';
    currentNumber = '';
};