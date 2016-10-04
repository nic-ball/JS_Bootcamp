/**
 * Created by nicholas.ball on 04/10/2016.
 */
//User to enter 3 numbers and return the sum
var e10 = document.getElementById("inputButton1");
e10.addEventListener("click", function() {
    var firstNumber = parseInt(document.getElementById("num").value);
    var secondNumber = parseInt(document.getElementById("num1").value);
    var thirdNumber = parseInt(document.getElementById("num2").value);
    var result = (firstNumber + secondNumber + thirdNumber);
    document.getElementById("reply1").innerHTML = "Your 3 numbers add up to " + result;
});
