/**
 * Created by nicholas.ball on 05/10/2016.
 */
//collect 3 user inputs amount to borrow
//interest rate and length of loan
//and calculate the interest only for
//the length of the loan
i1 = document.getElementById("inputButton");
i1.addEventListener("click", function() {
    var num = parseFloat(document.getElementById("num").value); // Loan value
    var num1 = parseFloat(document.getElementById("num1").value) / 100; // Interest rate
    var num2 = parseInt(document.getElementById("num2").value); // Years

    var res = num * (1 + num1)^num2;

    // var res = ((num * num2) * num1);
    // var res1 = num * num2;
    document.getElementById("tot").value = res;
});
