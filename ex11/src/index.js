function switchCase(letter){
    var animals
//Only change code below line
switch (letter) {
    case "a":
        animals = "antelope";
        break;
        case "b":
            animals = "bird";
            break;
            case "c":
                animals = "cat";
                break;
    default: animals = "stuff";
        break;
}
//Only change code above line
return animals;
}
console.log(switchCase("a")); //Change this line
console.log(switchCase("b")); //Change this line
console.log(switchCase("c")); //Change this line
console.log(switchCase("d")); //Change this line
console.log(switchCase("4")); //Change this line
module.exports = switchCase;