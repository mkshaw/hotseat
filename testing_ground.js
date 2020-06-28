/*
Player objects (i.e., people playing the game) are created by the constructor in the Player class.
What attributes will players have?
1. username
2. figurine
3. the space that they're currently located on, on the board
That's it for now, maybe later they would have power-ups or something, but
  not right now.
*/

class Player {
  constructor(username, figurine) {
    this._username = username;
    this._figurine = figurine; //whatever figurine they pick? could just be colour, to start
    this._space = 0; //everyone starts on space 0, increments by dice roll
  }

  get username() {
    return this._username;
  }

  get figurine() {
    return this._figurine;
  }

  get space() {
    return this._space;
  }

  rollDice() {
    this._space = this._space + Math.ceil(Math.random() * 6); //math.random generates number between 0 and 1, multiplied by 6 gives between 0 and 6, .ceil rounds up to integer 1-6
  }
}

let playerOne = new Player("kazooie7", "rooster"); // New player instance
console.log(playerOne.username);
console.log(playerOne.space);
playerOne.rollDice();
console.log(playerOne.space);
