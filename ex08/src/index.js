//Only change code below line
function logicalOrOperator(num){
    if(num>30 || num<20){
        return "Out"
    }else{
        return "In"
    }
}
console.log(logicalOrOperator(0));
console.log(logicalOrOperator(9));
console.log(logicalOrOperator(20));
console.log(logicalOrOperator(23));
console.log(logicalOrOperator(30));
console.log(logicalOrOperator(31));
console.log(logicalOrOperator(105));
//Only change code above line
module.exports = logicalOrOperator;