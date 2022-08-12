const arr=[1,23,56,87,14]
//2 NUMBER JUGAR
max=Math.max(...arr)
/*for(let i=0;i<arr.length;i++ ){
    if(arr[i]==max){
        arr.pop(max)
    }
}
secondmax=Math.max(...arr)
console.log(secondmax)*/

//1  NUMBER
//First sort whole array 

for(let i=0;i<arr.length-1;i++ ){
    curr=arr[0]
    if(arr[i]==max){
        continue
    }
    if((max-arr[i])<(max-curr)){
        secondlargest=arr[i]
    }
}
console.log("second largest  elemnt in an array is "+secondlargest)

//like if we change const values it give error but here it will not if we use "useStrict " then it will
//Object.Freeze() functionality
"use strict"
let person={
    name:"aamash",
    age:18}
Object.freeze(person)
person.name="neha"
person.age=19
console.log(person)