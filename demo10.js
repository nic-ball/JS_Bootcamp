/**
 * Created by nicholas.ball on 03/10/2016.
 */
//Collect two numbers and tell user if one or both are greater than 10
e8 = document.getElementById("inputButton7");
addEventListener("click", function() {
    var ninthNumber = parseInt(document.getElementById("num9").value);
    var tenthNumber = parseInt(document.getElementById("num10").value);
    if (ninthNumber >10)
        document.getElementById("reply8").innerHTML = "Your first number is greater than 10!";
    if (tenthNumber >10)
        document.getElementById("reply8").innerHTML = "Your second number is greater than 10!";
    if (ninthNumber >10 && tenthNumber >10)
        document.getElementById("reply8").innerHTML = "Both your numbers are greater than 10!";
    if (ninthNumber <10 && tenthNumber <10)
        document.getElementById("reply8").innerHTML = "Both your numbers are less than 10!";
});
