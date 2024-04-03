//assignment operator -> assigns values to a variable

let food = "Meal Day";

//arithmetic operators

// +, -, *, /, %

let dough = 10 + 10;
console.log(dough);

let milk = 20;
let sugar = 30;
let sauce = 25;

let mixture = milk + sugar + sauce; //add
mixture = mixture - sugar // subtract

let paste = milk * 2;//multiply
paste = paste / 2;//divide

sugar = sugar ** 2; //exponential to the power of (2*2)

console.log("paste: " + paste);
console.log(mixture);


// comparison operator
// >, <, <=, >=, ==, !=  
console.log(dough != milk);// not equal

let issaltpresent = true;
let issugarpresent = true;

// logic operators
// logic and (&&), logic or (||), logic not (!)
console.log(issaltpresent && issugarpresent); // && test for both  (and)
console.log(issaltpresent || issugarpresent); // if one is present (or)
console.log(!issaltpresent); //changes the presence of a substance either true or false (not)

// increment operator
// ++
let bumbusauce = 0;
console.log(++bumbusauce); //preincreament
console.log(bumbusauce++); //postincreament
console.log(bumbusauce); //after post increment

// decrement operator
// --
let pepper = 4;
console.log(--pepper); //predecrement
console.log(pepper--); //postdecrement
console.log(pepper);