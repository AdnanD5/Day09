//Only change code below line
function myForLoop1(){
var evenNumbers = [];
for (var i = 8; i>0; i--){
   if (i%2===0){
     evenNumbers.push(i)  
}

}
return evenNumbers
}
function myForLoop2(){
var evenInverseNumbers = [];
for (var i=1; i<9; i++) {
    if(i%2===0){
        evenInverseNumbers.push(i)  
    }
    
}
return evenInverseNumbers
}

console.log(myForLoop1());
console.log(myForLoop2());
//Only change code above line
module.exports = {
    myForLoop1,
    myForLoop2
};