// functions


function kitchen(meals, price){
    console.log("welcome to the codding kitchen");
    console.log("we pepare " + meals + "that costs " + price);
}
// you have to call a function in order to work
//follow the order of parameter
kitchen("Fish Meals ", 10);
kitchen("pasta Meals ", 5);
kitchen("rice Meals ", 15);

function sum(num1, num2) {
    //return num1 + num2;
    let result =  `sum of ${num1} and ${num2} = ${num1 + num2}`;
    return result;
}

console.log(sum(1,9));

