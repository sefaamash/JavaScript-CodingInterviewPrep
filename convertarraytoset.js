arr=[1,2,2,2,3,4,5,6,7]

se=new Set(arr) //set does not count duplicate number so in array its size is 9 but when we convert to set it will take size 7 and ignore 2 extra duplicated 2

console.log(se)