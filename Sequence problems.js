console.log(Math.floor(Math.random() * 10)); // to get single digit 
const Dice1= Math.floor(Math.random() * 6) + 1 ; // random dice number from 1 to 6
const Dice2= Math.floor(Math.random() * 6) + 1 ;
const A =Dice1+Dice2 ;// addition of 2 random dice numbers
console.log(A);


var arr=[]; // generate 5 random numbers
while(arr.length < 5){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) == -1) arr.push(r);
}
console.log(arr);