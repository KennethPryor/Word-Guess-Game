var name = prompt("What's your name?");
alert("Welcome to Hangman: Shark Edition, " + name + "!")
var guesses = 10;
var gameStarted = false;
var gameOver = false;
var wins = 0;
var winsText = document.getElementById("winsText");
winsText.textContent = "Wins: " + wins;
var guessesText = document.getElementById("guesses-text");
var sharkWord = document.getElementById("sharkWord");
sharkWord.textContent = "" + visibleLetters;
guessesText.textContent = "Guesses left till eaten: " + guesses;
var lettersGuessed =  document.getElementById("lettersGuessed")
lettersGuessed.textContent = guessedLetters;
var currentWord;
var wordLength = document.getElementById("guesses-Text")
var speciesList = [
    "greatwhite",
    "tiger",
    "hammerhead",
    "goblin",
    ""

];
var visibleLetters = [];
var visibleLetters = [];
document.onkeydown = function (event) {
    if (gameOver) {
        resetGame();
        gameOver = false;
    } else {
        if (event.keycode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
        }
    }
};
function makeGuess(letter) {
    if (guesses > 0) {
        if (!gameStarted) {
            gameStarted = true;
        }
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }

    }
    updateDisplay();
    checkwin();
}
function evaluateGuess(letter) {
    var positionsOfWord = [];
    for (var i = 0; i < speciesList[currentWord].length; i++) {
        if (speciesList[currentWord][i] === letter) {
            positionsOfWord.push(i);
        }
        if (positionsOfWord.length <= 0) {
            guesses--;
        } else {
            for (var i = 0; i < positionsOfWord.length; i++) {
                sharkWord[positionsOfWord[i]] = letter;
            }
        }
    };
}
function resetGame() {
    gameStarted = false;
    guesses = 0;
    guessedLetters = [];
    visibleLetters = [];
    for (var i = 0; i < speciesList[currentWord].length; i++) {
        visibleLetters.push("_")
    }
    updateDisplay();
};



// var speciesSplit = species.split("");

// console.log(speciesCharL)

// for (var i = 0; i < speciesCharL[currentWord]; i++) {
//     visibleLetters.push("_");
// };

// console.log(visibleLetters);


// var answerArray = [];
// for (var i = 0; i < speciesList.length; i++) {
//     // Test.textContent = answerArray[i] = "_";
//     // var wordLength = .length;

// }
// var remainingLetters = species.length;


// var species = speciesList[Math.floor(Math.random() * speciesList.length)];
var guessedLetters = [];
// this.wrong-guesses  0;

var gameOver = false;

// Test.textContent = speciesList[0];


function checkwin() {
    if (sharkWord.indexOf("_") === -1) {
        wins++;
        gameOver = true;
    }
}



