/**
 * Created by nicholas.ball on 05/10/2016.
 */
//Taking 3 inputs and displaying them as an array
var f1 = document.getElementById("inputButton");
f1.addEventListener("click", function() {
    // Get the 3 fruits inputted
    var fru1 = document.getElementById("fru1").value;
    var fru2 = document.getElementById("fru2").value;
    var fru3 = document.getElementById("fru3").value;

    // Create array
    var fruit_array = [fru1, fru2, fru3];

    var outputString = "";
    for(var i=0; i < fruit_array.length; i++)
    {
        outputString += fruit_array[i] + " ";
    }

    document.getElementById("reply").innerHTML = outputString;
});
