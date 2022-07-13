const display = document.getElementsByClassName('display');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => button.addEventListener('click', e => display.innerHTML += e.target.innerText));

const operate = (num1, num2) => {
    
};