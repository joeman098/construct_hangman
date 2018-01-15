var inquirer = require("inquirer");
var Letter = require("./letter.js");

function start() {
	var game = new Letter();
	game.masked();
	main();
	console.log(game.maskedword);
	function main() {
		inquirer
			.prompt([
				{
					type: "input",
					name: "guess",
					message: "enter a letter",
					validate: function(g) {
						if (g.length > 1 || g.length < 1) {
							return "guess correctly";
						} else {
							return true;
						}
					}
				}
			])
			.then(function(input) {
				if (game.win > 0) {
					console.log("win");
				} else if (game.guessLeft > 1) {
					game.guess(input.guess);
					if (game.win > 0) {
						console.log("win");
						inquirer
							.prompt([
								{
									type: "confirm",
									name: "restart",
									message: "would you like to play again"
								}
							])
							.then(function(yes) {
								if (yes.restart) {
									start();

								} else {
									console.log("good bye");
								}
							});
					}
					main();
				} else {
					inquirer
						.prompt([
							{
								type: "confirm",
								name: "restart",
								message: "would you like to play again"
							}
						])
						.then(function(yes) {
							if (yes.restart) {
								start();
							} else {
								console.log("good bye");
							}
						});
				}
			});

		//end main
	}

	// end start
}
start();
