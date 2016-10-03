/**
 * Created by nicholas.ball on 03/10/2016.
 */
//Collect 3 numbers and display the results of (a+b) * c
//and (a+ b +c)
e6 = document.getElementById("inputButton5");
addEventListener("click", function() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);
    var result3 = (a + b) * c;
    var result4 = (a + b + c);
    document.getElementById("reply6").innerHTML = result3  - result4 + " is the difference between " + (a + b) * c + " and " + (a + b + c);
});

