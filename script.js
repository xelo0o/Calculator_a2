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

//values
let input = "";
let operator = "";
let firstNumber ="";
let secondNumber = "";
let result = '';


    
const operate = op =>{
    if(op == '+') return +firstNumber + +secondNumber;
    if(op == '−') return +firstNumber - +secondNumber;
    if(op == '×') return +firstNumber * +secondNumber;
    if(op == '÷') return +firstNumber / +secondNumber;
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
        if(input == '.') return;
        //checks to see if input had value
        if(input == '') return;



    


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
    secondNumber = input;
    input = '';
    displayTop.textContent = `${firstNumber} ${operator} ${secondNumber}`;
    result = operate(operator);
    displayBottom.textContent = result;
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
    if(input.includes('.')) return;
    input += periodButton.textContent;
    displayBottom.textContent = input;
})



//deleted the last number of input value;
deleteButton.addEventListener('click', ()=>{
    input = input.toString().split('').slice(0,-1).join('');
    displayBottom.textContent = input;
})







































































































/*
//append number to end of Display text
let appendNumber = (element)=>{
    numberOne = numberOne + (element.textContent );
    displayBottom.textContent = numberOne; 
}

let clear = ()=>{
    displayTop.textContent = '';
    displayBottom.textContent = '';
    numberOne = '';
    numberTwo = '';
    result = 0;
}
//chooses which operation to use
let chooseOperation = (a,b,operation)=>{

    switch(operation){
        case '÷':
            a / b;
            break;
        case '×':
            a * b;
            break;
        case '+':
            a + b;
            break;
        case '-':
            a - b;
            break;
    }

}


//adds event listener to every button in button container
//appends number to display value
numberButtons.forEach((element) =>{
    element.addEventListener('click',()=>{
        appendNumber(element);     
    })
})

// Only allows one period in number
periodButton.addEventListener('click', ()=>{
    if(numberOne.includes('.')) return;
    appendNumber(periodButton);
})
// clear every value -- new calculator
allClearButton.addEventListener('click', ()=>{
    clear();
})
/// why does it show 0 when everything is deleted
deleteButton.addEventListener('click', ()=>{
    if(numberOne == '') return;  
    numberOne = numberOne.toString().split('');
    console.log(numberOne[0])
    let newValue = numberOne.splice(-1);
    numberOne = Number(numberOne.join(''));
    displayBottom.textContent = numberOne;
    
    
})



//Method functions


// deleted last entered character

console.log(numberOne);



*/
