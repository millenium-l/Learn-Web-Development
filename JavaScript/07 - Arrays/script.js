let course1 = "HTML";
let course2 = "CSS";
let course3 = "js";

let courses = ["HTML", "CSS", "js"];

console.log(courses[0]);
console.log(courses[1]);
console.log(courses[2]);

courses[2] = "Javascript";
courses[3] = "React";

console.log(courses);
/*console.log(course1);
console.log(course2);
console.log(course3);*/

let instructors = new Array("Dan", "lee");

instructors[0] = "Daniel";
console.log(instructors);

// adding both arrays together.
let info = courses.concat(instructors);
console.log(info);

// slicing 
let newArray = info.slice(2, 5);

console.log(newArray);

// easier way of combining two arrays
courses.push(...newArray); //spread operator is used to add as a string (...)
console.log(courses);

// second way
//let cat = newArray.concat(courses);
//console.log(cat);


// assosiative arrays

let car = [];

car["brand"] = "audi";
car["model"] = "gmts";
car["price"] =  400000;

console.log(car);

// objects

let randomnumber = Math.random();

//rounding off
randomnumber = Math.round(randomnumber);
console.log(randomnumber);

let squareRoot = Math.sqrt(169);
console.log(squareRoot);


// date function

let mydate = Date.now();

console.log(mydate);

// todays date
let instanceDate = new Date();

var currentTime = `month: ${instanceDate.getMonth()} Day: ${instanceDate.getDay()} Hour: ${instanceDate.getHours()} minutes: ${instanceDate.getMinutes()} sec: ${instanceDate.getSeconds()}`;

console.log(instanceDate);

console.log(currentTime);