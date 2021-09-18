// set this up 
const lowerLetters = ["a","b","c","d","e","f","g","h","i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const higherLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const symbols = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}","|",":",";",",","<",">",".","/","?"];
const split = [];
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
  console.log(
    "\x1b[36m%s\x1b[0m",
    "Please use at least one uppercase, lowercase, number and symbol charecters! *infdev*"
  );
	//nested loop
  let prompt2 = prompt("Password?: ");
  let completion1 = false;
	let completion2 = false;
	let completion3 = false;
	let completion4 = false;
	let completion5 = false;
  while (isComplete < 2) {
    async function check1() {
      for (const element of prompt2) {
        if (!lowerLetters.includes(element)) {
					console.log(element)
					completion2 = true
        } else if (!higherLetters.includes(element)) {
					console.log(element)
					completion3 = true
				} else if (!numbers.includes(element)) {
					console.log(element)
					completion4 = true
				} else if (!symbols.includes(element)) {
					console.log(element)
					completion5 = true
				} else {
					completion1 = true;
				}
      }}
    check1();

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
}

if (username == "" || password == "") {
  signUp();
} else {
	console.log('log in?')
}
