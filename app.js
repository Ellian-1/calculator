const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', e => display.innerText += e.target.innerText));