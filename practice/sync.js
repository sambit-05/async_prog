console.log("start");

function LongOp(waitMs ){
    console.log("Long op start");
    let waitUntil= new Date(new Date().getTime()+waitMs);
    while (new Date()<waitUntil){
        //do nun
    }
console.log("Long op end")
 }
LongOp(5000)
console.log("End");
