let myName = "lee";


let person = {
    name: "lee",
    age: 20,
    successrate: 0.8,
    hello() {
        console.log(`Welcome ${this.name}!`);
    },
    calculateDOB() {
        let yob = 2024 - this.age;
        return "year of birth: " + yob;
    }
};

console.log(person,calculateDOB());

let myAge = 10;
let mystatus = true;
let myArray = [];
let myObject = {};

console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof mystatus);
console.log(typeof myArray);
console.log(typeof myObject);


  // constructor function
function cook(dish, ingredient) {
    this.dish = dish;
    this.ingredient = ingredient;
}

let meal1 = new cook("Fish meal", "fish");

console.log(meal.dish);
console.log(meal.ingredient);

// copy an object
let copyperson = { ...person };

console.log(person.name);
console.log(copyperson.name);

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

const properties = object.keys(person);
console.log(properties);
    