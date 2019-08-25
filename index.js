var inquirer = require("inquirer");
const chalk = require("chalk");
var Word = require("./Word.js");

// List of Game of Throne Words
var gotArr = ["targaryen", "stark", "lannister", "greyjoy", "arryn", "baratheon", "tarly", "tyrell", "martell", "frey", "bolton"]

var guessLeft = 10;
var wrongGuessesArr = [];
// Select a word randomly from the GOT word array
var randomWord  = gotArr[Math.floor(Math.random() * gotArr.length)];
var currentWord = new Word(randomWord);
currentWord.wordLettersGenerator();
console.log(currentWord.wordLetters);
var currentWordArr = randomWord.split("");
console.log(currentWordArr);

console.log(chalk.black.bgYellow.bold("\n     Game of Throne Word Guess Game     ") + "\n----------------------------------------\n          ('GG' to Exit Game)\n");

// Start Game
function playGame(){
    console.log("\nNumber of Guesses Remaining: " + chalk.magenta(guessLeft) + "\n");
    console.log("Letter already guessed: " + chalk.magenta(wrongGuessesArr.join(", ")) + "\n");
    console.log("Current Word: " + currentWord.wordDisplay() + "\n");
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter: ",
            name: "guess",
            // validate: function(value){
            //     if(value.length !== 1 && value.toLowerCase() !== "gg"){
            //         return false;
            //     }else if(value.length === 1 && isNaN(value) === false)
            //     {
            //         return false;
            //     }else{
            //         return true;
            //     }
            // }
        }
    ]).then(function(answers){
        if((answers.guess).toLowerCase() === "gg"){
            console.log(chalk.cyan("\nAlright, please come again and goodbye for now.\n"));
            return;
        }else if(answers.guess === "" || isNaN(answers.guess) === false){
            console.log(chalk.red("\nPlease enter a valid letter!"));
            return playGame();
        }else if(answers.guess.length > 1){
            console.log(chalk.red("\nPlease enter ONE letter at a time!"));
            return playGame();
        }else if(wrongGuessesArr.includes(answers.guess)){
            console.log(chalk.red("\nThis letter has already been guessed and is not in the word! \nTry something else"));
            return playGame();
        }
        // Go through the current word's letters to see if user's guess is in the current word
        for(var i = 0; i < currentWord.wordLetters.length;i++){
            currentWord.wordLetters[i].letterCheck(answers.guess);
        }
        // Decrement Guess Count 
        if (currentWordArr.includes(answers.guess) === false){
            // console.log(currentWordArr.includes(answers.guess));
            guessLeft--;
            wrongGuessesArr.push(answers.guess);
        }
        // Lose Game If Guess Left is 0
        if(guessLeft === 0){
            endGame('lost');
            return;
        }
        // Win Game if user guessed all the letters
        if(currentWord.correctWord() || currentWord.correctWord() === true && guessLeft === 0){
            endGame('win');
            return;
        }

        playGame();
    });
}
// To Start the Game
playGame();

// End Game (Replay or Not)
function endGame(result){
    if(result === "lost"){
        inquirer.prompt([
            {
                type: "list",
                name: "lostReplay",
                message: "\nYou Lost...Would you like to try it again?",
                choices: ["YES", "NO"]
            }
        ]).then(function(answers){
            if(answers.lostReplay === "YES"){
                resetGame();
            }else if(answers.lostReplay === "NO"){
                console.log(chalk.cyan("\nAlright, please come again and goodbye for now.\n"));
                return;
            }
        });
    }else if(result === "win"){
        console.log(chalk.green("\nYOU GOT IT!\n"));
        resetGame();
    }
}
// Game Reset
function resetGame(){
    guessLeft = 10;
    randomWord  = gotArr[Math.floor(Math.random() * gotArr.length)];
    currentWord = new Word(randomWord);
    currentWord.wordLettersGenerator();
    currentWordArr = randomWord.split("");
    wrongGuessesArr = [];
    playGame();
}

