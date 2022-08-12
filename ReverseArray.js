const arr=[23,6,14,56,87]
revarr=[]
//Two ways
//1)
console.log(arr.reverse())
//2)
function reverse(input){
for (let i=input.length;i>=0;i--){
          rev=input[i]
}
return rev
}

reverse(arr)