// FOR loop

// used when u know how many illeterations are needed eg 10 
    
/*let skipcount = 10;

for (let initial = 0; initial <= skipcount; initial++) {
   console.log("skip count: " + initial);
}*/

// while loop
// test the condition then performs an action

// an infinite loop
let count = 5;
while (count > 0) {
   console.log("count = " + count);
    count--;
} 

// do while loop
// performs an action then test the condition

let x = 0;
do{
    console.log("value of x = ", x);
    x++;
} while (x < 3);



for(let score = 0; score <= 100; score = score + 20) {
    if (score >= 50) {
        console.log("Above average");
        break;
        //continue;
    }
    console.log("score = ", score);
}