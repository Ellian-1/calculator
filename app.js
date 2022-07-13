const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

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