// set this up
const lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const higherLetters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const symbols = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', ':', ';', ',', '<', '>', '.', '/', '?'];
const split = []
const prompt = require('prompt-sync')({sigint: true});
let username = '';
let password = '';
const narrator = 'sam';
let randomint = Math.floor(Math.random() * 10000 - 1000 + 1000);
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//the sign up messages thing lol.
async function signUp() {
		console.log(`${narrator}: Hi! we've noticed that you don't have an account yet!`);
		await sleep(2000);
		//username section
		console.log(`${narrator}: Lets get started setting up your account!`)
		console.log("\x1b[31m%s\x1b[0m", "*WARNING, it must be 5-15 charecters long!*");
		let abc = 0;
		let prompt1 = prompt('Username?: ').length;
		while(abc < 1) {
			if (prompt1 > 15) {
				console.log("please make your username shorter!");
				prompt1 = prompt('Username?: ').length;
			} else if (prompt1 < 5 ) {
				console.log("please make your username longer!");
				prompt1 = prompt('Username?: ').length;
			} else if (prompt1 || prompt1 < 15){
				abc = abc + 1;
			}}
		//password section!
		console.log("\x1b[39m%s\x1b[0m", "*Must be more than 10 charecters!*");
		console.log("\x1b[36m%s\x1b[0m", "Please use at least one uppercase, lowercase, number and symbol charecters!");
		let prompt2 = prompt('Password?: ');
		split.push((prompt2.match(/.{1,1}/g)))
		let poop = 0
		let splited = lowerLetters.forEach(elements => poop = poop + 1)
		let check1 = split.forEach((element) => {
			if(splited.includes(element)) console.log('pog');
			else console.log(aaaa);
		});
		while(abc < 2) {
			if (prompt2.length < 10) {
				console.log("please make your password longer!");
				prompt2 = prompt('Password?: ');
			}
			}
		}

if (username == '' || password == '') {
	signUp();
}
