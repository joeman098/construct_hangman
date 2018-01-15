//Word: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.

function Word() {
	var wordList = [
		"exist",
		"explanation",
		"facing",
		"film",
		"finest",
		"fireplace",
		"floating",
		"folks",
		"fort",
		"garage",
		"grabbed",
		"grandmother",
		"habit",
		"happily",
		"Harry",
		"heading",
		"hunter",
		"Illinois",
		"image",
		"independent",
		"instant",
		"January",
		"kids",
		"label",
		"Lee",
		"lungs",
		"manufacturing",
		"Martin",
		"mathematics",
		"melted",
		"memory",
		"mill",
		"mission",
		"monkey",
		"Mount",
		"mysterious",
		"neighborhood",
		"Norway",
		"nuts",
		"occasionally",
		"official",
		"ourselves",
		"palace"
	];

	var random = Math.floor(Math.random() * 42);
	this.currentWord = wordList[random];

	this.print = function() {
		console.log(this.currentWord);
	};
}
// var test = new Word
module.exports = Word;
// console.log(test.currentWord);
