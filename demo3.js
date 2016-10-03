/**
 * Created by nicholas.ball on 03/10/2016.
 */
//Set up an event listener
var e1 = document.getElementById("inputButton");
e1.addEventListener("click", function() {
    var name = document.getElementById("yourInput").value;
    document.getElementById("reply1").innerHTML = "My name is " + name +"!";
});
