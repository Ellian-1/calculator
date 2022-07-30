let display = document.querySelector('.display');
let buttons = document.querySelectorAll('.button');

buttons.forEach(button => button.addEventListener('click', e => {

    const buttonValue = e.target.innerText;

    switch(buttonValue) {
        case 'C':
            display.innerText = '';
            break;
        
        case '=':
            try{
                console.log(display.innerText);
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = "Error"
            }
            break;

        default:
            display.innerText += buttonValue;
    };
}));