//arr=[1,2,3,4,5]
//arr2=[...arr,6,7,8,9,10]

//console.log(arr2)

//rest

function greet(...name){
    console.log("first index of rest operator" + name[0])
return name
}

console.log(greet("ali",'alina','neha'))
