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
}));