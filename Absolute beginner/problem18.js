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
let a= +myArry[0];
let b= +myArry[1];
let c= +myArry[2];
let root1= (-b+Math.sqrt((b*b)-(4*a*c)))/(2*a);
let root2= (-b-Math.sqrt((b*b)-(4*a*c)))/(2*a);
root1=root1.toFixed(2);
root2=root2.toFixed(2);
console.log(root1);
console.log(root2);
//end-here
});
