const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
//Your code goes here … replace this line with your code logic 
let myArry= userInput[0].split(" ");
let prncl= myArry[0];
let istRate= myArry[1];
let time = myArry[2];
let sInterest=(prncl*istRate*time)/100;
sInterest= sInterest.toFixed(2);
console.log(sInterest);
//end-here
});
