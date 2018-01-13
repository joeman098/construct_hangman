var inquirer = require("inquirer");
var Letter = require("./letter.js");

function start(){
var game = new Letter
game.masked();
main();
console.log(game.maskedword);
function main (){
inquirer.prompt([
	{	
		type: "input",
		name:"guess",
		message:"enter a letter",
	}
	]).then(function(input){
		if(game.guessLeft > 1){
		game.guess(input.guess);
		main();
	}
	else{
		inquirer.prompt([
		{
			type:"confirm",
			name:"restart",
			message:"would you like to play again",
		}

			]).then(function(yes){
				if(yes.restart){
					start();
				}
				else{
					console.log("good bye");
				}
			})
	}
	})


//end main
};

// end start
};
start();
