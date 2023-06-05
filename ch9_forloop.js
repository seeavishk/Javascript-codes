const prompt = require("prompt-sync")();
let sum=0
let n=prompt("enter the value of n")
n=Number.parseInt(n)  //converts the given input of string into the integer  
for(let i=0;i<n;i++){
    sum+=(i+1)
}
console.log("sum of first n input numbers are \n"  +n+sum)