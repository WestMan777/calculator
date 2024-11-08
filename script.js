const viewport = document.getElementById('viewport');                                                //query selectors for all buttons and the viewport

const allButtons = document.getElementsByClassName('button');

const divideButton = document.getElementById('divide-button');
const multiplyButton = document.getElementById('multiply-button');
const plusButton = document.getElementById('plus-button');
const minusButton = document.getElementById('minus-button');
const clearButton = document.getElementById('clear-button');
const equalsButton = document.getElementById('equals-button');
const negativeButton = document.getElementById('negative-button');

const leftParenthesesButton = document.getElementById('left-parentheses-button');
const rightParenthesesButton = document.getElementById('right-parentheses-button');

const oneButton = document.getElementById('one-button');
const twoButton = document.getElementById('two-button');
const threeButton = document.getElementById('three-button');
const fourButton = document.getElementById('four-button');
const fiveButton = document.getElementById('five-button');
const sixButton = document.getElementById('six-button');
const sevenButton = document.getElementById('seven-button');
const eightButton = document.getElementById('eight-button');
const nineButton = document.getElementById('nine-button');
const zeroButton = document.getElementById('zero-button');


let viewText = '';                                                              // declares var for the vewport
                                           
let currentMode = 'mainEquationMode';                                           // controlls weather the input goes to currentEquation.equation or parentheses equation

let currentEquation = {                                                         // object that stores info about the equation being worked on
    equation: [],
    symbols: [],
    numbers: [],
    solution: '',
};

let currentParenthese = {                                                       // object that stores info about the current parenthese equation
    equation: [],
    allEquations: [],
    allArrLength: [],
    symbols: [],
    numbers: [],
    solutions: [],
};

let tick = -1;                                                                   // a tick that goes up by one every time a parenthese equation is solved
let finalSolveTick = 0;
let parenthesesCounter = -1;                                                     // variable for the number of current parentheses equations ion the current equation
let pareLengthCounter = 0;
let counter = 0;

function solve(){
    viewText = viewText + ' = ';
    refreshViewport();
    sortEquation();

    let numOne;
    let numTwo;

    for(let i = 0; i < currentEquation.equation.length; i++){                   // sorts through the equation and performs the required operations

        if(currentEquation.equation[i] === '+' && currentEquation.equation[(i + 1)] != '('){
            let solution;

            numOne = currentEquation.numbers[0];
            numTwo = currentEquation.numbers[1];

            numOne = Number(numOne);
            numTwo = Number(numTwo);

            solution = numOne + numTwo;

            currentEquation.numbers[0] = solution;
            delete currentEquation.numbers[1];

            viewText = viewText + solution;
            refreshViewport();
        }
        else if(currentEquation.equation[i] === '-' && currentEquation.equation[(i + 1)] != '('){
            let solution;

            numOne = currentEquation.numbers[0];
            numTwo = currentEquation.numbers[1];

            numOne = Number(numOne);
            numTwo = Number(numTwo);

            solution = numOne - numTwo;

            currentEquation.numbers[0] = solution;
            delete currentEquation.numbers[1];

            viewText = viewText + solution;
            refreshViewport();
        }
        else if(currentEquation.equation[i] === '/' && currentEquation.equation[(i + 1)] != '('){
            let solution;

            numOne = currentEquation.numbers[0];
            numTwo = currentEquation.numbers[1];

            numOne = Number(numOne);
            numTwo = Number(numTwo);

            solution = numOne / numTwo;

            currentEquation.numbers[0] = solution;
            delete currentEquation.numbers[1];

            viewText = viewText + solution;
            refreshViewport();
        }
        else if(currentEquation.equation[i] === '*' && currentEquation.equation[(i + 1)] != '('){
            let solution;

            numOne = currentEquation.numbers[0];
            numTwo = currentEquation.numbers[1];

            numOne = Number(numOne);
            numTwo = Number(numTwo);

            solution = numOne * numTwo;

            currentEquation.numbers[0] = solution;
            delete currentEquation.numbers[1]; 

            viewText = viewText + solution;
            refreshViewport();
        }
        else if(currentEquation.equation[i] === '+' && currentEquation.equation[(i + 1)] === '('){
            let solution;

            numOne = currentEquation.numbers[0];
            numTwo = currentParenthese.solutions[finalSolveTick];

            numOne = Number(numOne);
            numTwo = Number(numTwo);

            solution = numOne + numTwo;

            currentEquation.numbers[0] = solution;
            delete currentEquation.numbers[1];

            viewText = viewText + solution;
            finalSolveTick = finalSolveTick + 1;
            refreshViewport();
        }
        else if(currentEquation.equation[i] === '-' && currentEquation.equation[(i + 1)] === '('){
            let solution;

            numOne = currentEquation.numbers[0];
            numTwo = currentParenthese.solutions[finalSolveTick];

            numOne = Number(numOne);
            numTwo = Number(numTwo);

            solution = numOne - numTwo;

            currentEquation.numbers[0] = solution;
            delete currentEquation.numbers[1];

            viewText = viewText + solution;
            finalSolveTick = finalSolveTick + 1;
            refreshViewport();
        }
        else if(currentEquation.equation[i] === '*' && currentEquation.equation[(i + 1)] === '('){
            let solution;

            numOne = currentEquation.numbers[0];
            numTwo = currentParenthese.solutions[finalSolveTick];

            numOne = Number(numOne);
            numTwo = Number(numTwo);

            solution = numOne * numTwo;

            currentEquation.numbers[0] = solution;
            delete currentEquation.numbers[1];

            viewText = viewText + solution;
            finalSolveTick = finalSolveTick + 1;
            refreshViewport();
        }
        else if(currentEquation.equation[i] === '/' && currentEquation.equation[(i + 1)] === '('){
            let solution;

            numOne = currentEquation.numbers[0];
            numTwo = currentParenthese.solutions[finalSolveTick];

            numOne = Number(numOne);
            numTwo = Number(numTwo);

            solution = numOne / numTwo;

            currentEquation.numbers[0] = solution;
            delete currentEquation.numbers[1];

            viewText = viewText + solution;
            finalSolveTick = finalSolveTick + 1;
            refreshViewport();
        }
    }
}

function solveParentheses(){
    sortCurrentParenthese();
    console.log('tick at:   ' + tick);      // for debug

    let solution;

    for(let i = 0; i < currentParenthese.allEquations[tick].length; i++){
        if(currentParenthese.allEquations[tick][i] === '+'){
                
    
            numOne = currentParenthese.numbers[0];
            numTwo = currentParenthese.numbers[1];
    
            numOne = Number(numOne);
            numTwo = Number(numTwo);
    
            solution = numOne + numTwo;
            currentParenthese.numbers[0] = solution;

            delete currentParenthese.numbers[1];
    
            console.log('solution is -->   ' + solution);
        }
        else if(currentParenthese.allEquations[tick][i] === '-'){
                
    
            numOne = currentParenthese.numbers[0];
            numTwo = currentParenthese.numbers[1];
    
            numOne = Number(numOne);
            numTwo = Number(numTwo);
    
            solution = numOne - numTwo;
            currentParenthese.numbers[0] = solution;

            delete currentParenthese.numbers[1];
    
            console.log('solution is -->   ' + solution);
        }
        else if(currentParenthese.allEquations[tick][i] === '/'){
                
    
            numOne = currentParenthese.numbers[0];
            numTwo = currentParenthese.numbers[1];
    
            numOne = Number(numOne);
            numTwo = Number(numTwo);
    
            solution = numOne / numTwo;
            currentParenthese.numbers[0] = solution;
                
            delete currentParenthese.numbers[1];
    
            console.log('solution is -->   ' + solution);
        }
        else if(currentParenthese.allEquations[tick][i] === '*'){
                
    
            numOne = currentParenthese.numbers[0];
            numTwo = currentParenthese.numbers[1];
    
            numOne = Number(numOne);
            numTwo = Number(numTwo);
    
            solution = numOne * numTwo;
            currentParenthese.numbers[0] = solution;
                
            delete currentParenthese.numbers[1]; 
    
            console.log('solution is -->   ' + solution);
        }
    }
    currentParenthese.solutions[tick] = solution;
    console.log('solution for para eq # ' + tick + ' is ' + solution);
}

function sortEquation(){                                                        //this function sorts the user input (this should record to a global variable to be used in the solve func)
    let problem = [];
    let num = [];

    let length = 0;

    for(let i = 0; i < currentEquation.equation.length; i++){
        length = length + 1;

        if(currentEquation.equation[i] === '1'){
            num.push('1');
        }
        else if(currentEquation.equation[i] === '2'){
            num.push('2');
        }
        else if(currentEquation.equation[i] === '3'){
            num.push('3');
        }
        else if(currentEquation.equation[i] === '4'){
            num.push('4');
        }
        else if(currentEquation.equation[i] === '5'){
            num.push('5');
        }
        else if(currentEquation.equation[i] === '6'){
            num.push('6');
        }
        else if(currentEquation.equation[i] === '7'){
            num.push('7');
        }
        else if(currentEquation.equation[i] === '8'){
            num.push('8');
        }
        else if(currentEquation.equation[i] === '9'){
            num.push('9');
        }
        else if(currentEquation.equation[i] === '0'){
            num.push('0');
        }
        else if(currentEquation.equation[i] === '+'){                           // Checks to see if its the end of the previous number
            if(num.length > 0){
                let number = num.join('');
                problem.push(number);
                currentEquation.numbers.push(number);
            }
            problem.push('+');
            currentEquation.symbols.push('+');

            num = [];
        }
        else if(currentEquation.equation[i] === '-'){
            if(num.length > 0){
                let number = num.join('');
                problem.push(number);
                currentEquation.numbers.push(number);
            }
            problem.push('-');
            currentEquation.symbols.push('-');
            
            num = [];
        }
        else if(currentEquation.equation[i] === '/'){
            if(num.length > 0){
                let number = num.join('');
                problem.push(number);
                currentEquation.numbers.push(number);
            }
            problem.push('/');
            currentEquation.symbols.push('/');
            
            num = [];
        }
        else if(currentEquation.equation[i] === '*'){
            if(num.length > 0){
                let number = num.join('');
                problem.push(number);
                currentEquation.numbers.push(number);
            }
            problem.push('*');
            currentEquation.symbols.push('*');
            
            num = [];
        }
        else if(currentEquation.equation[i] === '('){
            if(num.length > 0){
                let number = num.join('');
                problem.push(number);
                currentEquation.numbers.push(number);
            }
            problem.push('(');
            currentEquation.symbols.push('(');
            
            num = [];

            tick = tick + 1;
            solveParentheses();
            console.log('parenthese solved');
            currentParenthese.equation = [];
        }
        console.log('sort number: ' + i + ' -- gives --->   ' + problem);
    }

    if(num.length > 0){                                         // adds the last number to the array at the end of the problem array
        let number = num.join('');                                                  
        problem.push(number);
        currentEquation.numbers.push(number);
    }

    currentEquation.equation = problem;
    refreshViewport();

    console.log('Sort Equation --->    ' + problem);
}

function sortCurrentParenthese(){
    console.log('parenthese sorted');

    currentParenthese.numbers = [];

    let problem = [];
    let num = [];

    for(let i = 0; i < currentParenthese.allArrLength[counter]; i++){

        if(currentParenthese.allEquations[tick][i] === '1'){
            num.push('1');
        }
        else if(currentParenthese.allEquations[tick][i] === '2'){
            num.push('2');
        }
        else if(currentParenthese.allEquations[tick][i] === '3'){
            num.push('3');
        }
        else if(currentParenthese.allEquations[tick][i] === '4'){
            num.push('4');
        }
        else if(currentParenthese.allEquations[tick][i] === '5'){
            num.push('5');
        }
        else if(currentParenthese.allEquations[tick][i] === '6'){
            num.push('6');
        }
        else if(currentParenthese.allEquations[tick][i] === '7'){
            num.push('7');
        }
        else if(currentParenthese.allEquations[tick][i] === '8'){
            num.push('8');
        }
        else if(currentParenthese.allEquations[tick][i] === '9'){
            num.push('9');
        }
        else if(currentParenthese.allEquations[tick][i] === '0'){
            num.push('0');
        }

        else if(currentParenthese.allEquations[tick][i] === '+'){                           // Checks to see if its the end of the previous number                      
            let number = num.join('');
            problem.push(number);
            problem.push('+');
            currentParenthese.numbers.push(number);
            currentParenthese.symbols.push('+');

            num = [];
        }
        else if(currentParenthese.allEquations[tick][i] === '-'){
            let number = num.join('');
            problem.push(number);
            problem.push('-');
            currentParenthese.numbers.push(number);
            currentParenthese.symbols.push('-');
            
            num = [];
        }
        else if(currentParenthese.allEquations[tick][i] === '/'){
            let number = num.join('');
            problem.push(number);
            problem.push('/');
            currentParenthese.numbers.push(number);
            currentParenthese.symbols.push('/');
            
            num = [];
        }
        else if(currentParenthese.allEquations[tick][i] === '*'){
            let number = num.join('');
            problem.push(number);
            problem.push('*');
            currentParenthese.numbers.push(number);
            currentParenthese.symbols.push('*');
            
            num = [];
        }
    }
    counter = counter + 1;

    let number = num.join('');                                                  // adds the last number to the array at the end of the problem array
    problem.push(number);
    currentParenthese.numbers.push(number);

    currentParenthese.equation = problem;
    refreshViewport();

    //console.log('after sorted parentheses: -->   ' + problem);
}

function refreshViewport(){                                                     // refreshes the viewport with the current equation
    viewport.textContent = viewText;
}

for(var i = 0; i < allButtons.length; i++){                                     // for debug ~~ displays current equation on the console
    let button = allButtons[i];

    button.addEventListener('click', function(){
        //console.log(currentEquation.equation);
    });    
}

divideButton.addEventListener('click', function(){                              // all the event listeners for the calculator buttons
    if(currentMode === 'mainEquationMode'){
        currentEquation.equation.push('/');
    }
    else if(currentMode === 'parenthesesMode'){
        currentParenthese.equation.push('/');
        pareLengthCounter = pareLengthCounter + 1;
    }
    viewText = viewText + ' / ';
    refreshViewport();                                     
});

multiplyButton.addEventListener('click', function(){
    if(currentMode === 'mainEquationMode'){
        currentEquation.equation.push('*');
    }
    else if(currentMode === 'parenthesesMode'){
        currentParenthese.equation.push('*');
        pareLengthCounter = pareLengthCounter + 1;
    }
    viewText = viewText + ' * ';
    refreshViewport();
});

plusButton.addEventListener('click', function(){
    if(currentMode === 'mainEquationMode'){
        currentEquation.equation.push('+');
    }
    else if(currentMode === 'parenthesesMode'){
        currentParenthese.equation.push('+');
        pareLengthCounter = pareLengthCounter + 1;
    }
    viewText = viewText + ' + ';
    refreshViewport();
});

minusButton.addEventListener('click', function(){
    if(currentMode === 'mainEquationMode'){
        currentEquation.equation.push('-');
    }
    else if(currentMode === 'parenthesesMode'){
        currentParenthese.equation.push('-');
        pareLengthCounter = pareLengthCounter + 1;
    }
    viewText = viewText + ' - ';
    refreshViewport();
});

clearButton.addEventListener('click', function(){
    currentEquation.equation = [];
    currentEquation.numbers = [];
    currentEquation.symbols = [];

    currentParenthese.allEquations = [];
    currentParenthese.equation = [];
    currentParenthese.allArrLength = [];
    currentParenthese.solutions = [];
    currentParenthese.numbers = [];
    currentParenthese.symbols = [];

    finalSolveTick = 0;
    pareLengthCounter = 0;
    counter = 0;
    parenthesesCounter = -1;
    tick = -1;
    currentMode = 'mainEquationMode';

    viewText = '';
    refreshViewport();
});

equalsButton.addEventListener('click', solve);

negativeButton.addEventListener('click', function(){                            // WIP --> set up a way to take the current number being worked on and make it negative

});

leftParenthesesButton.addEventListener('click', function(){                     // WIP --> set up something for distribution and the use of P.E.M.D.A.S
    
    currentEquation.equation.push('(');                                         // puts a place holder for the parentheses
    currentMode = 'parenthesesMode';                                            // puts input into parentheses equation
    parenthesesCounter = parenthesesCounter + 1;

    viewText = viewText + '(';
    refreshViewport();

    console.log(currentMode);
});

rightParenthesesButton.addEventListener('click', function(){                    // WIP

    currentMode = 'mainEquationMode';               
    
    currentParenthese.allEquations[parenthesesCounter] = [...currentParenthese.equation];           // puts parenthese equation into all equations array
    currentParenthese.equation = [];                                                                // clears parenthese equation

    console.log('para equation ' + parenthesesCounter + ' is currently: ' + currentParenthese.allEquations[parenthesesCounter]);        // for testing

    currentParenthese.allArrLength[parenthesesCounter] = pareLengthCounter;
    pareLengthCounter = 0;
    
    viewText = viewText + ')';
    refreshViewport();
    console.log(currentMode);
});

oneButton.addEventListener('click', function(){
    if(currentMode === 'mainEquationMode'){
        currentEquation.equation.push('1');
    }
    else if(currentMode === 'parenthesesMode'){
        currentParenthese.equation.push('1');
        pareLengthCounter = pareLengthCounter + 1;
    }
    viewText = viewText + '1';
    refreshViewport();
});

twoButton.addEventListener('click', function(){
    if(currentMode === 'mainEquationMode'){
        currentEquation.equation.push('2');
    }
    else if(currentMode === 'parenthesesMode'){
        currentParenthese.equation.push('2');
        pareLengthCounter = pareLengthCounter + 1;
    }
    viewText = viewText + '2';
    refreshViewport();
});

threeButton.addEventListener('click', function(){
    if(currentMode === 'mainEquationMode'){
        currentEquation.equation.push('3');
    }
    else if(currentMode === 'parenthesesMode'){
        currentParenthese.equation.push('3');
        pareLengthCounter = pareLengthCounter + 1;
    }
    viewText = viewText + '3';
    refreshViewport();
});

fourButton.addEventListener('click', function(){
    if(currentMode === 'mainEquationMode'){
        currentEquation.equation.push('4');
    }
    else if(currentMode === 'parenthesesMode'){
        currentParenthese.equation.push('4');
        pareLengthCounter = pareLengthCounter + 1;
    }
    viewText = viewText + '4';
    refreshViewport();
});

fiveButton.addEventListener('click', function(){
    if(currentMode === 'mainEquationMode'){
        currentEquation.equation.push('5');
    }
    else if(currentMode === 'parenthesesMode'){
        currentParenthese.equation.push('5');
        pareLengthCounter = pareLengthCounter + 1;
    }
    viewText = viewText + '5';
    refreshViewport();
});

sixButton.addEventListener('click', function(){
    if(currentMode === 'mainEquationMode'){
        currentEquation.equation.push('6');
    }
    else if(currentMode === 'parenthesesMode'){
        currentParenthese.equation.push('6');
        pareLengthCounter = pareLengthCounter + 1;
    }
    viewText = viewText + '6';
    refreshViewport();
});

sevenButton.addEventListener('click', function(){
    if(currentMode === 'mainEquationMode'){
        currentEquation.equation.push('7');
    }
    else if(currentMode === 'parenthesesMode'){
        currentParenthese.equation.push('7');
        pareLengthCounter = pareLengthCounter + 1;
    }
    viewText = viewText + '7';
    refreshViewport();
});

eightButton.addEventListener('click', function(){
    if(currentMode === 'mainEquationMode'){
        currentEquation.equation.push('8');
    }
    else if(currentMode === 'parenthesesMode'){
        currentParenthese.equation.push('8');
        pareLengthCounter = pareLengthCounter + 1;
    }
    viewText = viewText + '8';
    refreshViewport();
});

nineButton.addEventListener('click', function(){
    if(currentMode === 'mainEquationMode'){
        currentEquation.equation.push('9');
    }
    else if(currentMode === 'parenthesesMode'){
        currentParenthese.equation.push('9');
        pareLengthCounter = pareLengthCounter + 1;
    }    
    viewText = viewText + '9';
    refreshViewport();
});

zeroButton.addEventListener('click', function(){
    if(currentMode === 'mainEquationMode'){
        currentEquation.equation.push('0');
    }
    else if(currentMode === 'parenthesesMode'){
        currentParenthese.equation.push('0');
        pareLengthCounter = pareLengthCounter + 1;
    }
    viewText = viewText + '0';
    refreshViewport();
});