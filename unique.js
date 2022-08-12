arr=[6,2,14,15,15,8,8,0,7,7]
arr2=[]
for(let i=0;i<arr.length;i++){
if(arr2.indexOf(arr[i])== -1){
    arr2.push(arr[i])
}
}


for(let j=0;j<arr2.length;j++){
    for(let k=1+j;k<arr2.length;k++){
        if((j!=k)&&(arr2[j]>arr2[k])){
            temp=arr2[j]
            arr2[j]=arr2[k]
            arr2[k]=temp
        }
      
    }
}
console.log(arr2)
