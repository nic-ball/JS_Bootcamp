/**
 * Created by nicholas.ball on 04/10/2016.
 */
//alert box that displays user input
var e9 = document.getElementById("inputButton");
e9.addEventListener("click", function() {
    var name = document.getElementById("yourName").value;
    window.alert("Your name is " + name + "!");
});
