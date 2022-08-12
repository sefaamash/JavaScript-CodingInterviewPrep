const arr=[14,23,6,6,14,56,87,14]
duppelem=[]

for(let i=0;i<arr.length;i++){
   for(let j=1; j<arr.length;j++){
    
    if((i!==j)&&(arr[i]==arr[j])){
    console.log(" Eleemnts at Index"+ i +" And" +j +"are duplicates")
    //This portion check if dupp array already have that elemnt then it will not push it other wise itwill push
     if(duppelem.indexOf(arr[i])===-1){
     duppelem.push(arr[i])
    }
    
    }
}
}
console.log(duppelem)
//length of duppllarray
console.log(duppelem.length)