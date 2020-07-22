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
let myArry=[];
if (+userInput[0]>0){
    for(let i=1; i<= +userInput[0];i++){
        myArry[i-1]=i*9;
    }
console.log(myArry.join(" "));
}
else
console.log("NULL");
//end-here
});
