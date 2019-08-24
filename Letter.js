class Letter{
    constructor(character){
        this.character = character;
        this.guessed = false;
    }
    // If user gussed correctly it will show character. If not, it will be a dash
    letterDisplay(){
        if(this.guessed){
            return this.character + " ";
        }else{
            return "_ ";
        }
    }
    // Check if user guessed character is the same as the current letter
    letterCheck(userGuess){
        if(userGuess === this.character){
            this.guessed = true;
        }
    }
}

module.exports = Letter;