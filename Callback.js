function name(arr,callBack){
    arr.push("Neha")

    callBack()
}

arr=['aaamash','zainab']
function call(arr){
    console.log("Array is modified new array is " + arr )
}
name(arr,call(arr))