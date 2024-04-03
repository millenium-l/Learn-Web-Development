// loops + conditions

//score++ = score + 1

for(let score = 0; score <= 100; score = score + 20) {
    if (score >= 50) {
        console.log("Above average");
        break;
        //continue;
    }
    console.log("score = ", score);
}