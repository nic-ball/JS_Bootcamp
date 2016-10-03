/**
 * Created by nicholas.ball on 03/10/2016.
 */
//To show if two numbers are the same or different
var e4 = document.getElementById("inputButton3");
e4.addEventListener("click", function() {
    var fifthNumber = parseInt(document.getElementById("num5").value);
    var sixthNumber = parseInt(document.getElementById("num6").value);
    if (fifthNumber === sixthNumber)
        document.getElementById("reply4").innerHTML = "Both numbers are the same!";
    else
        document.getElementById("reply4").innerHTML = "The numbers are different!";
});
