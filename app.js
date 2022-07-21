// This is the calculator function of the calculator
const calculator = () => {
    
    // These are the variables that store the values of the output and the buttons

    // These two are the variables that store the values of the previous and current display
    let previousDisplay = document.querySelector('.previous-display')
    let currentDisplay = document.querySelector('.current-display');

    // These two store the values of the buttons and mathematical operators
    const buttons = document.querySelectorAll('button');
    const mathOperators = document.querySelectorAll('operator');

    //const equalsButton = document.getElementById('equal');

    // These three are the variables for the operators and the operators sign
    let firtstOperator = '';
    let secondOperator = '';
    let operator = '';

    // Create the function to handle the buttons
    const handleButtons = () => {
        buttons.forEach(button => button.addEventListener('click', () => {
            switch (button.innerText) {

                // In case of clicking the 'C' button, clean the current display
                case 'C':
                    currentDisplay.innerText = '';
                    break;

                // In case of clicking the '=' button, return the result of the operation
                case '=':
                    mathematicalOperations();
                    updateOperators();
                    break;
        
                // By default, shows the numbers that are clicking
                default:
                    //currentDisplay.innerText += button.innerText;
                    firtstOperator = button.innerText;

                updateOperators();
            };
        }));

        mathOperators.forEach(mathOperator => mathOperator.addEventListener('click', () => {
            operator = mathOperator.innerText;
            operate();
            updateOperators();
        }));

        /*equalsButton.addEventListener('click', () => {
            mathematicalOperations();
            updateOperators();
        })*/
    };

    // The operate function
    const operate = () => {
        
        if (secondOperator !== '') {
            mathematicalOperations();
        }

        secondOperator = `${firtstOperator} ${operator}`;
        firtstOperator = '';
    };

    // The mathematical operations
    const mathematicalOperations = () => {

        const currentNumber = Number(firtstOperator);
        const previousNumber = Number(secondOperator);
        let result;

        switch (operator) {
            case '+':
                result = previousNumber + currentNumber;
                return result;

            case '-':
                result = previousNumber - currentNumber;
                return result;

            case '*':
                result = previousNumber * currentNumber;
                return result;

            case '/':
                result = previousNumber / currentNumber;
                return result;
        };

        firtstOperator = result;
        operator = '';
        secondOperator = '';
    };

    /*const add = (num1, num2) => num1 + num2;

    const substract = (num1, num2) => num1 - num2;

    const multiply = (num1, num2) => num1 * num2;

    const division = (num1, num2) => num1 / num2;*/

    const updateOperators = () => {
        currentDisplay.innerText = firtstOperator;
        previousDisplay.innerText = secondOperator;
    };

    // Call the handleButtons function
    handleButtons();
};

// Call the calculator function
calculator();