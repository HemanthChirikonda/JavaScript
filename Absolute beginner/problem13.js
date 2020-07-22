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
let numb=+userInput[0];
let mtr=numb*1000;
console.log(mtr);
let cntMtr=mtr*100;
console.log(cntMtr);
//end-here
});
