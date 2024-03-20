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
let numberOne = displayBottom.textContent;
let numberTwo = displayTop.textContent;
let result = 0;


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




