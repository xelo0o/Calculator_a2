const displayTop = document.querySelector('#displayTop');
const displayBottom = document.querySelector('#displayBottom');
const buttonContainer = document.querySelector('#buttonContainer');

//Select All
const calculatorBtn = document.querySelectorAll('.calculatorBtn');
const numberButtons = document.querySelectorAll('[data-number]')
const operandButtons = document.querySelectorAll('[data-operand]');
const allClearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalButton = document.querySelector('[data-equal]');
const periodButton = document.querySelector('[data-period');


let firstNumber='';
let secondNumber='';
let operator='';
let displayValue = ''
let result = '';

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
            return 1*a + 1 *b;
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
        if(result == 'e' && displayTop.textContent !== ''){
            clear();
        }
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
        if(operator !== '' && secondNumber == '')return;
        if(operator !== ''){
            displayTop.textContent = `${firstNumber} ${operator} ${secondNumber}`
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


deleteButton.addEventListener('click', ()=>{
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





allClearButton.addEventListener('click', ()=>{
    clear();
})

equalButton.addEventListener('click',()=>{
    if(secondNumber == '') return;
    displayTop.textContent = displayValue;
    result = operate(operator,firstNumber,secondNumber);
    firstNumber=result;
    result='e';
    secondNumber='';
    operator='';
    displayBottom.textContent = firstNumber;
    
})























/*

//values
let input = "";
let operator = "";
let firstNumber ="";
let secondNumber = "";
let result = '';
let placeholder = '';

const reset = ()=>{
    input = "";
    operator = "";
    firstNumber ="";
    secondNumber = "";
    result = '';
}


const operate = op =>{
    if(op == '+') return +firstNumber + +secondNumber;
    if(op == '−') return +firstNumber - +secondNumber;
    if(op == '×') return +firstNumber * +secondNumber;
    if(op == '÷') return +firstNumber / +secondNumber;
}

const equals = ()=>{
    secondNumber = input;
    input = '';
    placeholder =`${firstNumber} ${operator} ${secondNumber}`;
    displayTop.textContent = placeholder;
    input = operate(operator);
    displayBottom.textContent = input;
    
    
}
//add event listener to all number buttons
numberButtons.forEach((element)=>{
    element.addEventListener('click', ()=>{        
        input += element.textContent;
        displayBottom.textContent = `${firstNumber} ${operator} ${input}`;        
    })    
})

//add event listener to operand buttons
operandButtons.forEach((element)=>{
    element.addEventListener('click', ()=>{
        //checks to see if value is only a decimal with no integers 
        if(input.toString().split('') == ('.')) return;
        //checks to see if input had value
        if(input == '') return;
        if(operator !== ""){
            equals();
            secondNumber = '';
            operator = '';
        } 
        

        //assigning values to variables
        operator = element.textContent;
        firstNumber = input;
        input = '';
        secondNumber = input;
        displayBottom.textContent = `${firstNumber} ${operator} ${input}`;

        
        
    })
})

//check to which operand to use and solve.
equalButton.addEventListener('click',()=>{
    
    equals();

})


//Clear all values, new calculator
allClearButton.addEventListener('click', ()=>{
    input = "";
    operator = "";
    firstNumber ="";
    secondNumber = "";
    displayBottom.textContent = '';
    displayTop.textContent = '';
})



// adds decimal to input. checks to only allow 1 decimal point
periodButton.addEventListener('click',()=>{
    if(input.toString().split('') == ('.')) return;
    input += periodButton.textContent;
    displayBottom.textContent = input;
})



//deleted the last number of input value;
deleteButton.addEventListener('click', ()=>{
    
    input = input.toString().split('').slice(0,-1).join('');
    displayBottom.textContent = input;
    
})



// stop equal from running the problem with every click
// fix the delete button for when its more then the first number
    // check if there is an operator and second number
        // if 2nd number, run normal delete function.
        // if operator has a value, reset the value to nothing and remove from display

*/