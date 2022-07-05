//  find odd number from user
function myFun(n){
    for(i=0;i<n; i++){
        if(i%2!==0){
            console.log(i);
        }
    }
    return (i==='2');
}
console.log(myFun(20));

// find even number from user

function evenNum(n){
    for(i=1;i<=n;i++){
        if(i%2==0){
            console.log(i);
        }
    } 
}
console.log(evenNum(20));

// find star * pattern use

for(i=1;i<=5;i++){
    console.log("*".repeat(i));

}

// sum of digit
function digitCount ( num )
{
     return Math.floor( num.toString()).length;
}

 digitCount(2343) ; 