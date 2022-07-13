// These are the variables that store the values of the output and the buttons
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

// This is the event listener for when the user clicks the buttons
buttons.forEach(button => button.addEventListener('click', (e) => {

    switch (e.target.innerText) {
        case 'C':
            display.innerText = '';
            break;

        default:
            display.innerText += e.target.innerText;
    };

    operate();

}));

// The operate function
const operate = (num1, operator, num2) => {
    switch (operator.innerText) {
        case '+':
            add(num1, num2);
            break;

        case '-':
            substract(num1, num2);
            break;

        case '*':
            multiply(num1, num2);
            break;

        case '/':
            division(num1, num2);
            break;
    };
};