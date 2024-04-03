//if(condition) {
    //code block to be executed if true
//}
//else {
    //if false
//}


let condition1 = true;
let condition2 = true;

if (condition1) {
    console.log("condition is met");
} else {
    console.log("condition is not met");
}

//nested if
if (condition1) {
    if (condition2){
        console.log("condition two is met");
    }
    else{
        console.log("no condition is met");
    }
}

//tenally operator (can be used in place of if) 
condition1 == true ? console.log("condition is met") : 
console.log("condition is not met");

let order = "tea";
order = prompt("Please input your order: ");
switch (order) {
    case "tea":
        console.log("order is tea");
        break;
    case "coffee":
        console.log("order is coffee");
        break;
    case "cappuchino":
        console.log("order is cappuchino");
        break;
    default:
        break;
}