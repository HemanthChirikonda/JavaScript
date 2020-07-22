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
let str = userInput[0].split("");
let numb=0;
for(let i=0;i<str.length;i++){
    if(str[i]===' '){
        numb=numb+1;
            
        }
        
    }
    //console.log(str);    
    

let ltgStrng = str.length - numb;
console.log(ltgStrng);
//end-here
});
