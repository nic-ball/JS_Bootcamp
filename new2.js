/**
 * Created by nicholas.ball on 04/10/2016.
 */
//Global and Local Variables
//declare a global variable
var var1 = 67;

//display on page
// parseInt(document.getElementById("global").value);
document.getElementById("global").innerHTML = ""+var1;

function display() {

    //declare local variable
    var1 = 666;

    //display it on the page
    // parseInt(document.getElementById("local").value);
    document.getElementById("local").innerHTML = ""+var1;
}

display();
