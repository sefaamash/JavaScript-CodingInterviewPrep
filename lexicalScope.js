// lexical scope 
/* What JavaScript do is when we are printing anything inside the function it first check wherther that
var is inside the function or not if it not then it will check in its lexical scope means in which function 
that inner function is defined if it so then it will print that otherwise it will check another lexical scope in which that 
outer function is defined if its so then print otherwise error so lexical scope is basically global var or global enviroment
 */

/*So how following example work ?
There are 3 functions first is function APP INSIDE it ANOTEHR FUNCTION myFunc then inside it another  myFunc2
so inside myFunc2 there is myVar variable printing so first it will check inside myFunc2 ,that myVAR IS
present or not if not then check in its lexical or global scope which is another function myFunc if its not
there as well then myFunc will check in its lexica scope which is myApp function if myApp also dont have then
myApp will check in its lexical scope which is globa to all inside file where myApp is defined then if its is present 
so it will print myvar*/ l
const myVar = "value1";

function myApp(){
    

    function myFunc(){
        // const myVar = "value59";
        const myFunc2 = () =>{
            console.log("inside myFunc", myVar);
        }
        myFunc2();
    }


    console.log(myVar);
    myFunc();
}

myApp();