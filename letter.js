
//Letter: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder 
//(such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.

var word = require("./word.js");

function Letter(){
	// this.masked = currentWord.replace(/./g, '-');
	this.guessLeft = 10 ;
	this.current = new word ;
	this.maskedword = [];
	this.wrong = "";
	this.masked = function(){
		var x = this.maskedword


		for(var i = 0; this.current.currentWord.length > i; i++){
					x.push("_");
		}
	
	//end masked	
	}
	this.guess =function(guess){
		// console.log(guess)
		// console.log(this.current.currentWord);
		// console.log(this.maskedword);
		var word = this.current.currentWord;
		if(word.search(guess)> -1){
			console.log("\n")
			this.maskedword[word.search(guess)] = guess
			console.log(this.maskedword);
			console.log("\n Wrong Guesses");
			console.log(this.wrong);
			console.log("-------------")

		}
		else{
			this.guessLeft -- ;
			console.log("\n")
			console.log(this.maskedword);
			console.log(`"Guesses reamaing ${this.guessLeft}`);
			console.log("\n Wrong Guesses");
			this.wrong += guess ;
			console.log(this.wrong);
			console.log("-------------")
		}
	//end guess
	}
// end letter	
}
module.exports = Letter ;