/*N
  NN
  NNN
  NNNN
  NNNNN    
string=""
  for(let i=1;i<=5;i++){
     
     for(let k=1;k<=i;k++){
      string+="N"
     }
     string+="\n"
  }
  console.log(string);*/

/*  *
   **
  ***
 ****
*****      */
n=5
string2=""

for(let i=1;i<=n;i++){
    for(let j=0;j<n-i;j++){
        string2+=" "
    }
    for(let k=0;k<i;k++){
        string2+="*"
    }
    string2+="\n"
}
console.log(string2)

string3=""

for(let l=0;l<n;l++){
    for(let m=0;m<n;m++){
        string3+="*"
    }
    string3+="\n"
}
console.log(string3)