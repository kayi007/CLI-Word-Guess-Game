# CLI-Word-Guess-Game
This is a Node.js Game of Thrones themed hangman Word Guess command-line game. 

# Word Guess Game Demo
This app is meant to be run in the user's Terminal and not in the user's browser. <br>
![Image of CLI-GIF](DEMO/demoCLI.gif)

To play the broswer version: <br>
:link: [PLAY HERE](https://kayi007.github.io/Word-Guess-Game/)

# How to Play
The words will be on the House Names in Game of Thrones. 

To start the game, please enter the following command in your terminal: <br>
`node index.js`

For each word, you will start with **12 chances** to guess the word correctly.

If the letter you guessed is not in the word, your guess count will decrement by 1.

If you used up all 12 chances, you lose the game but you have the option to exit the game or to replay the game.

If you guessed the word right before using up all your 12 chances, you win the game and the game will auto-generate the next word guess until you lose or exit the game. 

To exit the game, you can simply type **"GG"** in the terminal.

To help you get a better chance on winning the game, the letter you guessed wrong will show in "Letter already guessed" and will warn you that you've already guessed that letter if you entered the wrong letter again.

You will get a warning message if you try to enter two letters, a number, or not enter anything.

# Technologies Used for CLI-Word-Guess-Game
As an app developer of CLI-Word-Guess-Game, here are the technologies I used:
- Node.js
- npm packages: chalk, inquirer
