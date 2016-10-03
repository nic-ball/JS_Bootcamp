/**
 * Created by nicholas.ball on 03/10/2016.
 */
//Tell a user if the number they have inputted is negative, <10 or >10
e7 = document.getElementById("inputButton6");
addEventListener("click", function() {
    var eighthNumber = parseInt(document.getElementById("num8").value);
    if (eighthNumber <0)
        document.getElementById("reply7").innerHTML = "The number you have entered is negative!";
    if (eighthNumber >=0 && eighthNumber <10)
        document.getElementById("reply7").innerHTML = "The number you have entered is less than ten!";
    if (eighthNumber >=10)
        document.getElementById("reply7").innerHTML =  "The number you have entered is ten or above!";
});
