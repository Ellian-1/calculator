const calculator = () => {

    let display = document.querySelector('.display');
    let buttons = document.querySelectorAll('.button');
    
    buttons.forEach(button => button.addEventListener('click', e => {
    
        const buttonValue = e.target.textContent;
        
        if (buttonValue === 'C') {
            display.textContent = '';
        } else if (buttonValue === '=') {
            try {
                display.textContent = eval(display.textContent);
            } catch {
                display.textContent = 'Error';
            };
        } else {
            if (display.textContent == '0') {
                display.textContent = '';
                display.textContent += buttonValue;    
            } else {
                display.textContent += buttonValue;
            }
        };

    }));
    
};

calculator();