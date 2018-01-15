//Letter: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder
//(such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.

var word = require("./word.js");

function Letter() {
	// this.masked = currentWord.replace(/./g, '-');
	this.guessLeft = 10;
	this.win = 0;
	this.current = new word();
	this.maskedword = [];
	this.wrong = "";
	this.masked = function() {
		var x = this.maskedword;

		for (var i = 0; this.current.currentWord.length > i; i++) {
			x.push("_");
		}

		//end masked
	};
	this.guess = function(guess) {

		var word = this.current.currentWord
		word.toLowerCase();
		if (word.search(guess) > -1) {
			console.log("\n");
			for (var i = 0; word.length > i; i++) {
				var n = word.indexOf(guess, i);
				if (n >= 0) {
					this.maskedword[n] = guess;
					if (this.maskedword.toString().replace(/,/g, '') == word){
						this.win ++
						console.log(this.win);

					}

				}
			}
			// this.maskedword[word.search(guess)] = guess;
			console.log(this.maskedword);
			console.log(`"Guesses reamaing ${this.guessLeft}`);
			console.log("\n Wrong Guesses");
			console.log(this.wrong);
			console.log("-------------");
		} else {
			this.guessLeft--;
			console.log("\n");
			console.log(this.maskedword);
			console.log(`"Guesses reamaing ${this.guessLeft}`);
			console.log("\n Wrong Guesses");
			this.wrong += guess;
			console.log(this.wrong);
			console.log("-------------");
		}
		//end guess
	};
	// end letter
}
module.exports = Letter;
