/**
 * Created by nicholas.ball on 04/10/2016.
 */
//a game to guess a number
function yourGuess() {

    var guess = document.getElementById("guess").value;
    var guesses = document.getElementById("output").value;

    //If the guess is correct show answer
    if (guess === numtoguess) {
        guesses.value = guesses.value + "\r" + "You have guessed correctly! ("+guess+")";
    }else if (guess > numtoguess) {
        guesses.value = guesses.value + "\r" + "You are guessing too high! ("+guess+")";
    }else {
        guesses.value = guesses.value + "\r" + "You are guessing too low! ("+guess+")";
    }
}

function showNumberToGuess() {
    //show randomly generated number if the onclick event
    //fires and the checkbox is check; otherwise, remove the
    //number and hide using display: none;
}
