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
let Numb= +userInput[0];
Numb=Numb.toFixed(0);
if(Numb%2 ===0)
console.log("Even");
else
console.log("Odd");
//end-here
});
