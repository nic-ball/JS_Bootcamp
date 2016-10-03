/**
 * Created by nicholas.ball on 03/10/2016.
 */
//Shows which number entered is the largest!
var e3 = document.getElementById("inputButton2");
e3.addEventListener("click", function() {
    var thirdNumber = parseInt(document.getElementById("num3").value);
    var fourthNumber = parseInt(document.getElementById("num4").value);
    if (thirdNumber > fourthNumber)
        document.getElementById("reply3").innerHTML = "The number " + thirdNumber + " is larger!";
    else
        document.getElementById("reply3").innerHTML = "The number " + fourthNumber + " is larger!";

});
