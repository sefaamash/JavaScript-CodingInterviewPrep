//Q) How to check whether a number is an integer or not an integer
//to take input
const ps=require('prompt-sync');
const prompt=ps()

var input=prompt("Enter")
//isNan is used to ceck whether given input not a inteegr

if(isNaN(input)){
    console.log("Its not an integer"+input)
}
else{
    console.log("its a integer")
}

