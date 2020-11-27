const age = 17;
 
let isAdult, canWork, canEnlist, canDrink;
 
if (age >= 16) {
    canWork = true;
 
    if (age >= 18) {
        isAdult = true;
        canEnlist = true;
 
        if (age >= 21) {
            canDrink = true;
        }
    }
}

console.log(isAdult)
console.log(canWork)
console.log(canEnlist)
console.log(canDrink)
