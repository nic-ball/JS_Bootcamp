/**
 * Created by nicholas.ball on 03/10/2016.
 */
//Adds two numbers together
var e2 = document.getElementById("inputButton1");
e2.addEventListener("click", function() {
    var firstNumber = parseInt(document.getElementById("num1").value);
    var secondNumber = parseInt(document.getElementById("num2").value);
    var result = firstNumber + secondNumber;
    document.getElementById("reply2").innerHTML = "The sum of your numbers is " + result;
});
