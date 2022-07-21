const calculator = () => {
    // These are the variables that store the values of the output and the buttons
    const previousDisplay = document.querySelector('.previous-display')
    const currentDisplay = document.querySelector('.current-display');
    const buttons = document.querySelectorAll('button');
    const equalsButton = document.getElementById('equal');
    let firtstOperator = '';
    let secondOperator = '';
    let operator = '';
    const mathOperators = document.querySelectorAll('operator');


    // Create the function to handle the buttons
    const handleButtons = () => {
        buttons.forEach(button => button.addEventListener('click', () => {
            switch (button.innerText) {
                case 'C': case '=':
                    currentDisplay.innerText = '';
                    break;
        
                default:
                    currentDisplay.innerText += button.innerText;
                    firtstOperator = button.innerText;

                updateOperators();
            };
        }));

        mathOperators.forEach(mathOperator => mathOperator.addEventListener('click', () => {
            operator = mathOperator.innerText;
            operate(firtstOperator, operator, secondOperator);
            updateOperators();
        }));

        equalsButton.addEventListener('click', () => {
            operate(firtstOperator, operator, secondOperator);
            updateOperators();
        })
    };
    handleButtons();

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

    const add = (num1, num2) => {
        const result = num1 + num2;
        currentDisplay.textContent = result;
    };

    const substract = (num1, num2) => {
        const result = num1 - num2
        currentDisplay.textContent = result;
    };

    const multiply = (num1, num2) => {
        const result = num1 * num2;
        currentDisplay.textContent = result;

    };

    const division = (num1, num2) => {
        const result = num1 / num2
        currentDisplay.textContent = result;
    };

    const updateOperators = () => {
        
    };
};

calculator();