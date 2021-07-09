function doCalc() {
    let num1 = document.getElementById("fnum").value;
    let num2 = document.getElementById("snum").value;
    let result = 0;
    let operator = Math.random * (4-1) + 1;
    if (operator == 1 && ((num1+num2)%1 == 0)) {
        result = num1+num2
    }
    if (operator == 2 && ((num1-num2)%1 == 0)) {
        result = num1-num2;
    }
    return [operator, result];
}

//function checkWhole()