// These are the variables that store the values of the output and the buttons
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const equalsButton = document.getElementById('equal');
const firtstOperator = '';
const secondOperator = '';
const mathOperators = document.querySelectorAll('operator');
const operator = '';

// This is the event listener for when the user clicks the buttons
buttons.forEach(button => button.addEventListener('click', (e) => {

    switch (e.target.innerText) {
        case 'C': case '=':
            display.innerText = '';
            break;

        default:
            display.innerText += e.target.innerText;
            firtstOperator = display.innerText;
            secondOperator = '';
    };

    /*// Call the operate function
    operate(firtstOperator, mathOperator, secondOperator);*/

}));

mathOperators.forEach(op => op.addEventListener('click', (e) => {
    switch (e.target.innerText) {
        case '+':
            operator = '+';
            break;

        case '-':
            operator = '-';
            break;

        case '*':
            operator = '*';
            break;

        case '/':
            operator = '/';
            break;
    
        default:
            break;
    }
}));

// Call the operate function
equalsButton.addEventListener('click', () => {
    display.textContent = (`${operate(firtstOperator, operator, secondOperator)}`);
});

// The operate function
const operate = (num1, operator, num2) => {
    
    num1 = Number(num1);
    num2 = Number(num2);

    switch (operator.innerText) {
        case '+':
            return add(num1, num2);

        case '-':
            return substract(num1, num2);

        case '*':
            return multiply(num1, num2);

        case '/':
            return division(num1, num2);
    };
};

// The mathematical functions

const add = (num1, num2) => num1 + num2;
const substract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;