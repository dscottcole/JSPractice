// const age = 17;
 
// let isAdult, canWork, canEnlist, canDrink;
 
// if (age >= 16) {
//     canWork = true;
 
//     if (age >= 18) {
//         isAdult = true;
//         canEnlist = true;
 
//         if (age >= 21) {
//             canDrink = true;
//         }
//     }
// }

// console.log(isAdult)
// console.log(canWork)
// console.log(canEnlist)
// console.log(canDrink)

// const age = 20;
 
// let isAdult, canWork, canEnlist, canDrink;
 
// if (age >= 21) {
//     isAdult = true;
//     canWork = true;
//     canEnlist = true;
//     canDrink = true;
// } else if (age >= 18) {
//     isAdult = true;
//     canWork = true;
//     canEnlist = true;
// } else if (age >= 16) {
//     canWork = true;
// }

// console.log(isAdult)
// console.log(canWork)
// console.log(canEnlist)
// console.log(canDrink)

// const hungerLevel = 3
// let food

// switch (hungerLevel) {
//     case 1:
//         food = "Grapes"
//         break;
//     case 2:
//         food = "Salad"
//         break;
//     case 3:
//         food = "Spaghetti"
//         break;

//     default:
//         food = "Zero food for you, my friend."
//         break;
// }

// console.log(food)

// const age = 15;
 
// let isTeenager;
 
// switch (age) {
//     case 13:
//     case 14:
//     case 15:
//     case 16:
//     case 17:
//     case 18:
//     case 19:
//         isTeenager = true;
//         console.log('case 19: ', isTeenager);
//     default:
//         isTeenager = false;
//         console.log('default: ', isTeenager);
// }

const age = 15;
 
let isTeenager;
 
switch (true) {
    case age >= 13 && age <= 19:
        isTeenager = true;
        console.log(`case ${age}:`, isTeenager);
    default:
        isTeenager = false;
        console.log('default: ', isTeenager);
}
