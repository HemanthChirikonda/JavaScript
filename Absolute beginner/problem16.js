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
let largest=0;
for(let i=0;i<userInput.length; i++){
    if(userInput[i]>largest){
        largest=userInput[i];
    }
}

console.log(largest);

//end-here
});
