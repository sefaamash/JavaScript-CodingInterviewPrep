const ps=require('prompt-sync');
const prompt=ps()

//Defining rows
rows=3
//defining columns
col=3
var principalDiagnol=0
var secondryDiagnol=0

//Taking matric input
var arr = [];
for (var i=0; i<rows; i++){
    arr[i] = [];                     
    for (var j=0; j<col; j++){
      arr[i][j]= prompt (`Enter for  ${i} , ${j}`); 
      if (i==j){
        principalDiagnol=parseInt(principalDiagnol)+parseInt(arr[i][j])
        multiplyPrinciple= parseInt(arr[i])*parseInt(arr[j])
       }
    if((i===0 && j===2) || (i===1 && j===1) ||( i===2 && j===0)){
        secondryDiagnol=parseInt(secondryDiagnol) + parseInt(arr[i][j])
        multiplySecondry= parseInt(arr[i])*parseInt(arr[j])
       }
    
  }}
  console.log(`SUM OF PRINCIPLE DIAGNOL IS ${principalDiagnol}`);
  console.log(`Product OF PRINCIPLE DIAGNOL IS ${(parseInt(multiplyPrinciple))}`);
  console.log(`SUM OF SECONDRY DIAGNOL IS ${secondryDiagnol}`);
  console.log(`Product OF Secondry DIAGNOL IS ${(multiplySecondry)}`);