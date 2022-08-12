//String Sorting
//arr=["li","Ali","neha","benish","kamran","seljuk","hamza"]
arr=[1,23,56,87,14]
sortarr=[]
temp=0
//easy way
//console.log(arr.sort(function(a, b){return a-b}))

const sort=(ar)=>{
    for(let i=0;i<ar.length;i++){
        for(let j=1+i; j<ar.length;j++){
            if((i!=j)&& (ar[i]>ar[j])){
                temp=ar[i]
                ar[i]=ar[j]
                ar[j]=temp
                
             }
               }}
               console.log(ar)
            
               console.log("Maximum is" + ar[ar.length-1])
                console.log("Minimum is" + ar[0])
                
        }
    
sort(arr)

ar=[1,2,3,4,5,6,7]

for(let va in ar){
    console.log(va)
}