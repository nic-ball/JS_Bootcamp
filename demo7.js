/**
 * Created by nicholas.ball on 03/10/2016.
 */
//Show a number one lower and one higher than users input
var e5 = document.getElementById("inputButton4");
e5.addEventListener("click", function() {
    var seventhNumber = parseInt(document.getElementById("num7").value);
    var result1 = seventhNumber -1;
    var result2 = seventhNumber +1;
    document.getElementById("reply5").innerHTML = result1 + " &amp; " + result2 +" are the numbers either side of your number!";

});
