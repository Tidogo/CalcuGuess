// Author: Timothy Goddard
// Description: This is the Javascript file used in the CalcuGuess project. It contains the functions required to properly operate the guessing game.
// Date: 07/13/2021
let operator = 0;
function doCalc() {
    let num1 = parseInt(document.getElementById("fnum").value);
    let num2 = parseInt(document.getElementById("snum").value);
    let result = 0.1;
    do {
        operator = Math.floor(Math.random() * (4 - 1 + 1) + 1);
        if (operator == 1 && ((num1+num2)%1 == 0)) {
            result = num1+num2;
        }
        if (operator == 2 && ((num1-num2)%1 == 0)) {
            result = num1-num2;
        }
        if (operator == 3 && ((num1/num2)%1 == 0)) {
            result = num1/num2;
        }
        if (operator == 4 && ((num1*num2)%1 == 0)) {
            result = num1*num2;
        }
    }
    while (result == 0.1)
    //alert(result.toString() + " | " + operator.toString());
    document.getElementById("result").innerHTML =  "RESULT: " + result;
}

function checkOp() {
    let result = false;
    let userGuess = document.querySelectorAll('input[name="op"]');
    for (const guess in userGuess) {
        if (guess.checked) {
            if (guess.value == operator) {
                result = true;
                break;
            }
        }
    }
    if (result == 0) {
        alert("You have guessed correct!");
        document.getElementById("result").innerHTML = "RESULT: "
        document.getElementById("fnum").innerHTML = "";
        document.getElementById("lnum").innerhtml = "";
    }
    else {
        alert("You have guessed incorrectly! Try again")
    }
    
}