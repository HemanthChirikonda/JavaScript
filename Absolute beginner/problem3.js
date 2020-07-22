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
 //console.log(a);
 var i=a;
//console.log(a);
  var z= (i%2);
	  //console.log(z);
	  //console.log(i);
if(i == 0 && a == 0 )
{
	  console.log("Error");
}  
else if (a>=13  && a !== 0){
		  console.log("Error");
		      }
	  else if(i <=12 && i !==0)
	  {
          if(z === 0)
		  {
		  //console.log("!");
           if( i<=6 && i==2  ){
              console.log("28");
			  //alert("28");
			  } 
			  else if (i <= 6 && i!==2 ) {
              console.log("30");
			  //alert("2");
			  }
			  
              else if (i !== 2 && i > 7 )
			  {
              console.log("31");
			  ///alert("4");
			  }
          } 
          else if (z !== 0)
          { //console.log("A");
               if(i<6 && i<= 12){
             console.log("31");}
             else if (i>7 && i<= 12){
              console.log("30");}
			  else if (i==7){
			  console.log("31");
			  }
			  
          }
		  }
 
  
  
});