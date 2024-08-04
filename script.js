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

let currentEquation = {                                                         // JS object that stores info about the equation being worked on
    equation: [],
    symbols: [],
    numbers: [],
    solution: '',
};

function solve(){
    viewText = viewText + ' = ';
    refreshViewport();

    sortEquation();

    let numOne;
    let numTwo;

    for(let i = 0; i < currentEquation.equation.length; i++){                   // sorts through the equation and performs the required operations
        if(currentEquation.equation[i] === '+'){
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
        else if(currentEquation.equation[i] === '-'){
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
        else if(currentEquation.equation[i] === '/'){
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
        else if(currentEquation.equation[i] === '*'){
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
    }
}

function sortEquation(){                                                        //this function sorts the user input (this should record to a global variable to be used in the solve func)
    let problem = [];
    let num = [];

    for(let i = 0; i < currentEquation.equation.length; i++){
        

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
            let number = num.join('');
            problem.push(number);
            problem.push('+');
            currentEquation.numbers.push(number);
            currentEquation.symbols.push('+');

            num = [];
        }
        else if(currentEquation.equation[i] === '-'){
            let number = num.join('');
            problem.push(number);
            problem.push('-');
            currentEquation.numbers.push(number);
            currentEquation.symbols.push('-');
            
            num = [];
        }
        else if(currentEquation.equation[i] === '/'){
            let number = num.join('');
            problem.push(number);
            problem.push('/');
            currentEquation.numbers.push(number);
            currentEquation.symbols.push('/');
            
            num = [];
        }
        else if(currentEquation.equation[i] === '*'){
            let number = num.join('');
            problem.push(number);
            problem.push('*');
            currentEquation.numbers.push(number);
            currentEquation.symbols.push('*');
            
            num = [];
        }
    }

    let number = num.join('');                                                  // adds the last number to the array at the end of the problem array
    problem.push(number);
    currentEquation.numbers.push(number);

    currentEquation.equation = problem;
    refreshViewport();

    console.log(problem);
}

function refreshViewport(){                                                     // refreshes the viewport with the current equation
    viewport.textContent = viewText;
}



for(var i = 0; i < allButtons.length; i++){                                     // for debug ~~ displays current equation on the console
    let button = allButtons[i];

    button.addEventListener('click', function(){
        console.log(currentEquation.equation);
    });    
}



divideButton.addEventListener('click', function(){                              // all the event listeners for the calculator buttons
    currentEquation.equation.push('/');
    viewText = viewText + ' / ';
    refreshViewport();                                     
});

multiplyButton.addEventListener('click', function(){
    currentEquation.equation.push('*');
    viewText = viewText + ' * ';
    refreshViewport();
});

plusButton.addEventListener('click', function(){
    currentEquation.equation.push('+');
    viewText = viewText + ' + ';
    refreshViewport();
});

minusButton.addEventListener('click', function(){
    currentEquation.equation.push('-');
    viewText = viewText + ' - ';
    refreshViewport();
});

clearButton.addEventListener('click', function(){
    currentEquation.equation = [];
    currentEquation.numbers = [];
    currentEquation.symbols = [];

    viewText = '';
    refreshViewport();
});

equalsButton.addEventListener('click', solve);

negativeButton.addEventListener('click', function(){                            // WIP
    
});

leftParenthesesButton.addEventListener('click', function(){                     // WIP
    currentEquation.equation.push('(');
});

rightParenthesesButton.addEventListener('click', function(){                    // WIP
    currentEquation.equation.push(')');
});

oneButton.addEventListener('click', function(){
    currentEquation.equation.push('1');
    viewText = viewText + '1';
    refreshViewport();
});

twoButton.addEventListener('click', function(){
    currentEquation.equation.push('2');
    viewText = viewText + '2';
    refreshViewport();
});

threeButton.addEventListener('click', function(){
    currentEquation.equation.push('3');
    viewText = viewText + '3';
    refreshViewport();
});

fourButton.addEventListener('click', function(){
    currentEquation.equation.push('4');
    viewText = viewText + '4';
    refreshViewport();
});

fiveButton.addEventListener('click', function(){
    currentEquation.equation.push('5');
    viewText = viewText + '5';
    refreshViewport();
});

sixButton.addEventListener('click', function(){
    currentEquation.equation.push('6');
    viewText = viewText + '6';
    refreshViewport();
});

sevenButton.addEventListener('click', function(){
    currentEquation.equation.push('7');
    viewText = viewText + '7';
    refreshViewport();
});

eightButton.addEventListener('click', function(){
    currentEquation.equation.push('8');
    viewText = viewText + '8';
    refreshViewport();
});

nineButton.addEventListener('click', function(){
    currentEquation.equation.push('9');
    viewText = viewText + '9';
    refreshViewport();
});

zeroButton.addEventListener('click', function(){
    currentEquation.equation.push('0');
    viewText = viewText + '0';
    refreshViewport();
});