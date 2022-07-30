const calculator = () => {
    let display = document.querySelector('.display');
    let buttons = document.querySelectorAll('.button');
    
    buttons.forEach(button => button.addEventListener('click', e => {
    
        const buttonValue = e.target.innerText;
        
        if (buttonValue === 'C') {
            display.innerText = '';
        } else if (buttonValue === '=') {
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = 'Error';
            };
        } else {
            display.innerText += buttonValue;
        };
    }));
};

calculator();