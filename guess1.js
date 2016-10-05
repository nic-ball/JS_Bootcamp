/**
 * Created by nicholas.ball on 05/10/2016.
 */
var random = (Math.random());
var multiply = random * 100;
var round = Math.round(multiply);
var number = round;

for (var c = 0; c < 4; c++) {

    var guess = prompt("Guess what number I'm thinking, 1-100");

    if (guess < number) {
        alert("Higher" + " " + c);
    }
    else if (guess > number) {
        alert("Lower" + " " + c);
    }
    else {
        alert("Correct, the number I was thinking of was " + number);
    }
}
