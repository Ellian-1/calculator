let display = document.getElementsByClassName('display');
let buttons = Array.from( document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', e => {
        switch(e.target.innerText) {
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
                display.innerText = e.target.innerText;
        }
    })
})