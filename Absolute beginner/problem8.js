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
console.log(Numb*1+' '+Numb*2+' '+Numb*3);
//end-here
});
