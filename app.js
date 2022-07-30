// This is the calculator function
const calculator = () => {

    // These are the variables that store the values of the display and the buttons
    let display = document.querySelector('.display');
    let buttons = document.querySelectorAll('.button');
    
    // This is the event listener for when a button is clicked
    buttons.forEach(button => button.addEventListener('click', e => {
    
        // Declare a variable that store the text content of the button event
        const buttonValue = e.target.textContent;
        
        // The if... else if... else statement here has functionalities for each special button and the rest

        // If the button clicked is 'C' clear the display
        if (buttonValue === 'C') {
            display.textContent = '';
        } else if (buttonValue === '=') {
            // If the button clicked is '=':
            try {
                // try to evaluate the digits on the display
                display.textContent = eval(display.textContent);
            } catch {
                //Instead it shows 'Error' on the display
                display.textContent = 'Error';
            };
        } else {
            // For the other cases:
            if (display.textContent === '0') {
                // If the previously displayed digit is 0, then replace it with the new digits
                display.textContent = '';
                display.textContent += buttonValue;    
            } else {
                // Instead it will only display the clicked digits
                display.textContent += buttonValue;
            };
        };
    }));
};

// Call the calculator function
calculator();