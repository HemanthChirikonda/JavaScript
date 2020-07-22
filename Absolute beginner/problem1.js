//A Simple Hello World
//console.log("Hello World");


// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
 // console.log(data)
 var a= data;
 if (a>0){
     var i;
     var z=1;
     for (i=1;i<=a;i++){
         z=z*i;
         //console.log(z);
     }
    console.log(z);
 }
 else 
 console.log("Error");
});
