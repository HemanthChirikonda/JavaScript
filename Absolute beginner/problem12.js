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
let myArry= userInput[0].split(' ');
let numb1=+myArry[0];
let numb2= +myArry[1];
if (numb2>numb1)
console.log(numb1);
else
console.log(numb2);
//end-here
});
