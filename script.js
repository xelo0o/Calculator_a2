const displayTop = document.querySelector('#displayTop');
const displayBottom = document.querySelector('#displayBottom');
const buttonContainer = document.querySelector('#buttonContainer');
const subtractButton = document.querySelector('[data-subtract]');
const allClearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalButton = document.querySelector('[data-equal]');
const periodButton = document.querySelector('[data-period');
const negativePositive = document.querySelector('[data-negative]');
const footerText  = document.querySelector('#footerText');

//Select All
const calculatorBtn = document.querySelectorAll('.calculatorBtn');
const numberButtons = document.querySelectorAll('[data-number]')
const operandButtons = document.querySelectorAll('[data-operand]');

const year = new Date().getFullYear();


let firstNumber='';
let secondNumber='';
let operator='';
let displayValue = ''
let result = '';
let displayAll = `${firstNumber} ${operator} ${secondNumber}`;


//footer text
footerText.textContent = `Copyright © ${year} xelo`;

const clear = ()=>{
    firstNumber= '';
    secondNumber='';
    operator='';
    result = '';
    displayValue = '';
    displayBottom.textContent = '';
    displayTop.textContent = '';
}

// DO MATH AND STUFF!
function operate(operator, a, b){
    switch(operator){
        case '+':
            return 1*a + 1*b;
        case '-':
            return 1*a - 1*b;
        case '×':
            return a * b;            
        case '÷':
            return a / b;
    }
}



numberButtons.forEach((element)=>{
    
    element.addEventListener('click', ()=>{
        if(displayBottom.textContent == result && displayTop.textContent) clear();
        //assigns value to secondNumber variable if the operator variable is NOT empty
        if(operator !== ''){
            secondNumber += element.textContent;
            displayValue = `${firstNumber} ${operator} ${secondNumber}`;
            displayBottom.textContent = displayValue;
        }else{
        // assigns value to firstNumber    
            firstNumber += element.textContent;
            displayValue = firstNumber;
            displayBottom.textContent = displayValue;
        }
    })
})

operandButtons.forEach((element)=>{
    element.addEventListener('click',()=>{

        if(firstNumber == '.') return;
        if(firstNumber !== '' && result !== ''){
            firstNumber = result;
            result = '';
            displayBottom.textContent = firstNumber;
        }
        if(firstNumber == '') return;
        if(operator !== '' && secondNumber == '')return;
        if(operator !== ''){
            displayTop.textContent = `${firstNumber} ${operator} ${secondNumber}`;
            result = operate(operator,firstNumber,secondNumber);
            firstNumber = result;
            secondNumber='';
            operator='';
            result = '';
        }
        operator = element.textContent;
        displayValue = `${firstNumber} ${operator}`;
        displayBottom.textContent = displayValue;
    })
})


negativePositive.addEventListener('click', ()=>{
    if(displayBottom.textContent == result && displayTop.textContent) return;
    if(firstNumber == '.' || secondNumber == '.')return;
    if(firstNumber !== '' && operator == ''){
        firstNumber *= -1;
        displayBottom.textContent = firstNumber;
    }
    if(operator !== '' && secondNumber !== ''){
        secondNumber *= -1;
        displayBottom.textContent = `${firstNumber} ${operator} ${secondNumber}`;
    }
})


periodButton.addEventListener('click', () =>{
    if(displayBottom.textContent == result && displayTop.textContent) clear();
    if(secondNumber == '' && operator == ''){
        if(firstNumber.toString().includes('.')) return;
        firstNumber += periodButton.textContent;
        displayBottom.textContent = firstNumber;
        console.log(firstNumber);
    }else{
        if(secondNumber.toString().includes('.')) return;
            secondNumber += periodButton.textContent;
            displayBottom.textContent = `${firstNumber} ${operator} ${secondNumber}`
        }
    })


deleteButton.addEventListener('click', ()=>{
    if(displayBottom.textContent = result) return;
    if(secondNumber !== ''){
        secondNumber = secondNumber.toString().split('').slice(0,-1).join('');
        displayValue = `${firstNumber} ${operator} ${secondNumber}`;
        displayBottom.textContent = displayValue;
    }else if( operator !== '' && secondNumber == ''){
        operator = '';
        displayValue = firstNumber;
        displayBottom.textContent = displayValue;
    }else{
        firstNumber = firstNumber.toString().split('').slice(0,-1).join('');
        displayValue = firstNumber;
        displayBottom.textContent = displayValue;
    }
})


//creates blank calculator 
allClearButton.addEventListener('click', ()=>{
    clear();
})
//MAKES IT DO MATH
equalButton.addEventListener('click',()=>{
    if(secondNumber == '' || secondNumber == '.') return;
    displayTop.textContent = displayValue;
    result = operate(operator,firstNumber,secondNumber);
    displayTop.textContent = `${firstNumber} ${operator} ${secondNumber} =`
    displayBottom.textContent = result;
    firstNumber = result;
    secondNumber='';
    operator='';
    
    
})


