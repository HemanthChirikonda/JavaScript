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
let side = parseInt(userInput[0]);
let area= (Math.sqrt(3)/4)*side*side;
console.log(area.toFixed(2));
//end-here
});
