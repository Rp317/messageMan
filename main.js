// set this up 
const uppercase = new RegExp('(?=.*?[A-Z])');
const lowercase = new RegExp("(?=.*?[a-z])");
const number = new RegExp('(?=.*?[0-9])')
const symbol = new RegExp('(?=.*?[#?!@$%^&*-+=|~:;?/.,<>])')
const prompt = require("prompt-sync")({ sigint: true });
let username = "";
let password = "";
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
	console.log("\x1b[36m%s\x1b[0m","Please use at least one uppercase, lowercase, number and symbol charecters!")
	//Really you could be reducing a lot of duplication with better use of objects and arrays, so you can loop (or even make use of functions like .every())
	let prompt2 = prompt("Password?: ");
	let done = true
	let check1 = new Promise ((resolve, reject) => {
		if (uppercase.test(prompt2)) {
			const something1 = 'waiting...'
  		resolve(something1)
		} else {
			const something1No = 'please add an uppercase letter!'
			reject(something1No)
		}
	})
	let check2 = new Promise ((resolve, reject) => {
		if (lowercase.test(prompt2)) {
			const something2 = 'waiting...'
  		resolve(something2)
		} else {
			const something2no = 'please add an uppercase letter!'
			reject(something2no)
		}
	})

	let check3 = new Promise ((resolve, reject) => {
		if (number.test(prompt2)) {
			const something3 = 'waiting...'
  		resolve(something3)
		} else {
			const something3no = 'please add an number!'
			reject(something3no)
		}
	})
		let check4 = new Promise ((resolve, reject) => {
		if (symbol.test(prompt2)) {
			const something4 = 'waiting...'
  		resolve(something4)
		} else {
			const something4no = 'please add an symbol!'
			reject(something4no)
		}
	})
	let ab = false
	while(ab = false) {
		Promise.all([check1, check2, check3, check4])
		.then(function(data){console.log('done!')})
		.then(ab = true)
 		.catch(function(err){console.error(err)});
	}
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
