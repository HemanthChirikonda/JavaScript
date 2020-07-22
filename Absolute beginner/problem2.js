
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
 // console.log(data)
 var a= data;
 if (a>0){
    var b= Math.PI;
 var numb= (2*b*a);
 numb= +numb.toFixed(2);
 console.log(numb) ;
 }
 else 
 console.log("Error");
});
