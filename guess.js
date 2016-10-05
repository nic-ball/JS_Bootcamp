/**
 * Created by nicholas.ball on 04/10/2016.
 */
//a game to guess a number
function yourGuess() {

    var guess = document.getElementById("guess").value;
    var guesses = document.getElementById("output").value;

    //If the guess is correct show answer
    if (guess === numToGuess) {
        guesses.value = guesses.value + "\r" + "You have guessed correctly! ("+guess+")";
    }else if (guess > numToGuess) {
        guesses.value = guesses.value + "\r" + "You are guessing too high! ("+guess+")";
    }else {
        guesses.value = guesses.value + "\r" + "You are guessing too low! ("+guess+")";
    }
}

function showNumberToGuess() {
    //show randomly generated number if the onclick event
    //fires and the checkbox is check; otherwise, remove the
    //number and hide using display: none;.
    if (document.getElementById("cheat").checked) {
        document.getElementById("numberToGuess").value = numToGuess;
        document.getElementById("cheatShow").style.display = "inline";
        else {
            document.getElementById("numberToGuess").value = " ";
            document.getElementById("cheatShow").style.display = "none";
        }
    }

    //randomly generate a number
    function generateNumberToGuess(confirmIt){
        var guesses = document.getElementById("output");
        // confirm this is what we want when the confirmIt
        // argument was passed
        if (confirmIt && !confirm("Restart game with new number?")) {
            return;
        }

        guesses.value = "";
        numToGuess= Math.floor(Math.random()*500);
        guesses.value = "New number generated.\n";

        //Don't forget to hide the new number
        document.getElementById("numToGuess").value = "";
        document.getElementById("cheatShow").style.display = "none";
    }
}

function showGuesses() {
    var guesses = document.getElementById("guesses");
    var btn = document.getElementById("showGuesses");

    if (guesses.style.display != "block") {
        guesses.style.display = "block";
        btn.value = "Hide My Guesses";
    } else {
        guesses.style.display= "none";
        btn.value = "Show My Guesses";
    }

    window.onload = function() {
        generateNumberToGuess();
    }

