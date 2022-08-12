//Create a new map

let myMap=new Map()
let myMap2=new Map([
    ["name","Aamash"],
    ["Age",19],
])
//Setting key,values to map

key1="Name"
key2=null;
key3=function(){}

myMap.set(key1,"Zainab")
myMap.set(key2,"Its a null value")
myMap.set(key3,"its a function")

//console.log(myMap)

//find size of map
console.log(myMap.size)

//accesing map through for of loop
for(let [key,value] of myMap2){
    console.log(key,value)
}

//For  only keys
for(let key of myMap2.keys()){
console.log(key)
}

//For  only values
for(let values of myMap2.values()){
    console.log(values)
    }

//Using forEach 
myMap2.forEach((key,values)=>{
    console.log(key,values)
})