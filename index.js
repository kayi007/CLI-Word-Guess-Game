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
// console.log(currentWord.wordLetters);

console.log(chalk.black.bgYellow.bold("\n     Game of Throne Word Guess Game     ") + "\n----------------------------------------\n          ('GG' to Exit Game)\n");

// Start Game
function playGame(){
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter: ",
            name: "guess",
            validate: function(value){
                if(value.length !== 1 && value !== "GG"){
                    return "Please try again!";
                }
                return true;
            }
        }
    ]).then(function(answers){
        if(answers.guess === "GG"){
            console.log(chalk.cyan("Alright, please come again and goodbye for now."));
            return;
        }else if(answers.guess === ""){
            console.log(chalk.red("Please enter a valid letter!"));
            return playGame();
        }else if(answers.guess.length > 1){
            console.log(chalk.red("Please enter ONE letter at a time!"));
            return playGame();
        }else if(wrongGuessesArr.includes(answers.guess)){
            console.log(chalk.red("This letter has already been guessed! Try something else"));
            return playGame();
        }

    });
}
// playGame();




