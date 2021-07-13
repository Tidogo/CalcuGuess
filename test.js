function doCalc() {
    let num1 = document.getElementById("fnum").value;
    let num2 = document.getElementById("snum").value;
    let result = 0.1;
    do {
        let operator = Math.floor(Math.random() * (4 - 1 + 1) + 1);
        if (operator == 1 && ((num1+num2)%1 == 0)) {
            result = num1+num2
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

//function checkWhole()