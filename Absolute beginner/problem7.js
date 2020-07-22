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
let N= +userInput[0];
let NthTerm=N*N;
if(N==0)
console.log("0");
else if(N<0)
console.log("Error");
else
console.log(NthTerm);


//end-here
});
