// set this up 
const lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const higherLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
	"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const symbols = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ":", ";", ",", "<", ">", ".", "/", "?"];
const split = [];
const prompt = require("prompt-sync")({ sigint: true });
let username = "";
let password = "";
let prompt20 = []
const narrator = "sam";
let randomint = Math.floor(Math.random() * 10000 - 1000 + 1000);
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

//the sign up messages thing lol.
async function signUp() {
	console.log(
		`${narrator}: Hi! we've noticed that you don't have an account yet!`
	);
	await sleep(2000);
	//username section
	console.log(`${narrator}: Lets get started setting up your account!`);
	console.log(
		"\x1b[31m%s\x1b[0m",
		"*WARNING, it must be 5-15 charecters long!*"
	);
	let isComplete = 0;
	let prompt1 = prompt("Username?: ");
	while (isComplete < 1) {
		if (prompt1.length > 15) {
			console.log("please make your username shorter!");
			prompt1 = prompt("Username?: ");
		} else if (prompt1.length < 5) {
			console.log("please make your username longer!");
			prompt1 = prompt("Username?: ");
		} else if (prompt1 || prompt1 < 15) {
			isComplete = isComplete + 1;
		}
	}
	username = prompt1;
	//password section!
	console.log("\x1b[39m%s\x1b[0m", "*Must be more than 10 charecters!*");
	console.log(
		"\x1b[36m%s\x1b[0m",
		"Please use at least one uppercase, lowercase, number and symbol charecters!"
	);
	//Really you could be reducing a lot of duplication with better use of objects and arrays, so you can loop (or even make use of functions like .every())
	let prompt2 = prompt("Password?: ");
	function step1() {
	for(const element of prompt2) {
		if(lowerLetters.includes(element)) {
			console.log('pog')
			step2()
			break;
		} else {
			console.log('no')
			break;
		}
	}}
	function step2() {
	for(const element of prompt2) {
		if(higherLetters.includes(element)) {
			console.log('pog')
			step3()
			break;
		} else {
			console.log('no')
			break;
		}
	}}
	function step3() {
	for(const element of prompt2) {
		if(numbers.includes(element)) {
			console.log('pog')
			step4()
			break;
		} else {
			console.log('no')
			break;
		}
	}}
	function step4() {
	for(const element of prompt2) {
		if(symbols.includes(element)) {
			console.log('pog')
			break;
		} else {
			console.log('no')
			break;
		}
	}}
	step1()
	while (isComplete < 2) {
		if (prompt2.length < 10) {
			console.log("please make your password longer!");
			prompt2 = prompt("Password?: ");
		} else {
				isComplete = isComplete + 1;
		}
	}
}

if (username == "" || password == "") {
	signUp();
} else {
	console.log('log in?')
}
