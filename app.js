let display = document.getElementsByClassName('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', e => display.innerText += e.target.innerText);
});

const operate = (num1, num2) => {
    
};