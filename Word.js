var Letter = require("./Letter.js");

class Word{
    constructor(word){
        this.word = word;
        this.wordLetters = [];
    }
    // Take random word, split into characters then turn each character into a Letter Obj 
    wordLettersGenerator(){
        var wordArr = this.word.split("");
        for (var i = 0; i < wordArr.length; i++){
            var newLetter = new Letter(wordArr[i]);
            this.wordLetters.push(newLetter);
        }
    }
    // Check if user's character guess exist in the word
    wordCheck(userChar){
        for(var i = 0; i < this.wordLetters.length; i++){
            this.wordLetters[i].letterCheck(userChar);
        }
    }
    // Display Word based on user's guess
    wordDisplay(){
        var displayWord = "";
        for (var i = 0; i < this.wordLetters.length; i++){
            displayWord += this.wordLetters[i].letterDisplay();
        }
        return displayWord;
    }

    correctWord(){
        for(var i = 0; i < this.wordLetters.length; i++){
            if(!this.wordLetters[i].guessed){
                return false;
            }
        }
        return true;
    }
}

module.exports = Word;