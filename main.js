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
		"Please use at least one uppercase, lowercase, number and symbol charecters! *infdev*"
	);
	//Really you could be reducing a lot of duplication with better use of objects and arrays, so you can loop (or even make use of functions like .every())
	let completion1 = false;
	let prompt2 = prompt("Password?: ");
	for (const stringg of prompt2) {
		prompt20.push(stringg)
	}
	async function check1() {
		while (completion1 = false) {
			if (lowerLetters.every(prompt20)) {
				return doSomething.then(smh => {
					if (higherLetters.every(prompt20)) {
						completion1 = true;
					} else {
						console.log('please add a uppercase letter!')
					}
				})
			} else {
			console.log('please add a lowercase letter!')
			}
		}}
	
	check1()
	while (isComplete < 2)
		if (prompt2.length < 10) {
			console.log("please make your password longer!");
			prompt2 = prompt("Password?: ");
		}
	if (completion1 === true) {
		console.log('pog')
	} else {
		console.log("eh");
	}
	isComplete = isComplete + 1;
}

if (username == "" || password == "") {
	signUp();
} else {
	console.log('log in?')
}
