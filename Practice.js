// let writeCards = (array, occasion) => {
//     let builtArray = []
    
//     for (let i = 0; i < array.length; i++) {
//         builtArray.push(`Thank you, ${array[i]}, for the wonderful ${occasion} gift!`)
//     }
//     return builtArray
// }

// let writeCards2 = (array, occasion) => {
//     let builtArray = []
//     let i = 0
//     while (i < array.length) {
//         builtArray.push(`Thank you, ${array[i]}, for the wonderful ${occasion} gift!`)
//         i++
//     }
//     return builtArray
// }

// writeCards(["Ada", "Brendan", "Ali"], "birthday")
// writeCards2(["Ada", "Brendan", "Ali"], "birthday")

// const userInfo = {
//     firstName: 'Avi',
//     lastName: 'Flombaum',
//     company: {
//         name: 'Flatbook Labs',
//         jobTitle: 'Developer Apprentice'
//     },
//     friends: [{
//         firstName: 'Joe',
//         lastName: 'Burgess',
//         company: {
//             name: 'Flatbook Labs',
//             jobTitle: 'Developer Apprentice'
//         }
//     },
//     {
//         firstName: 'Gabe',
//         lastName: 'Jackson',
//         company: {
//             name: 'Flatbook Labs',
//             jobTitle: 'Lead Developer'
//         }
//     }],
//     projects: [{
//         title: 'Flatbook',
//         description: 'The premier Flatiron School-based social network in the world.'
//     },
//     {
//         title: 'Scuber',
//         description: 'A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.'
//     }]
// };

// function deepIterator(target) {
//     if (typeof target === 'object') {
//         for (const key in target) {
//             deepIterator(target[key]);
//         }
//     } else {
//         console.log(target);
//     }
// }

// deepIterator(userInfo)


// const users = [
//     {
//         firstName: 'Niky',
//         lastName: 'Morgan',
//         favoriteColor: 'Blue',
//         favoriteAnimal: 'Jaguar'
//     },
//     {
//         firstName: 'Tracy',
//         lastName: 'Lum',
//         favoriteColor: 'Yellow',
//         favoriteAnimal: 'Penguin'
//     },
//     {
//         firstName: 'Josh',
//         lastName: 'Rowley',
//         favoriteColor: 'Blue',
//         favoriteAnimal: 'Penguin'
//     },
//     {
//         firstName: 'Kate',
//         lastName: 'Travers',
//         favoriteColor: 'Red',
//         favoriteAnimal: 'Jaguar'
//     },
//     {
//         firstName: 'Avidor',
//         lastName: 'Turkewitz',
//         favoriteColor: 'Blue',
//         favoriteAnimal: 'Penguin'
//     },
//     {
//         firstName: 'Drew',
//         lastName: 'Price',
//         favoriteColor: 'Yellow',
//         favoriteAnimal: 'Elephant'
//     }
// ];

// let penguinFilter = (arr) => {
//     arr.filter(user => {
//         if (user.favoriteAnimal === "Penguin") {
//             console.log(user.firstName)
//         }
//     })
// }

// let penguinBlueFilter = (arr) => {
//     arr.filter(user => {
//         if (user.favoriteAnimal === "Penguin" && user.favoriteColor === "Blue") {
//             console.log(user.firstName)
//         }
//     })
// }



// const oldAccounts = [
//     { userID: 15, title: 'Developer Apprentice', accessLevel: 'user' },
//     { userID: 63, title: 'Developer Apprentice', accessLevel: 'user' },
//     { userID: 97, title: 'Developer Apprentice', accessLevel: 'user' },
//     { userID: 12, title: 'Developer Apprentice', accessLevel: 'user' },
//     { userID: 44, title: 'Developer Apprentice', accessLevel: 'user' }
// ];

// let mapper = (arr, change) => {
//     let i = 0
//     let newArr = []
//     while (i < arr.length) {
//         newArr.push(Object.assign({}, arr[i], change))
//         i++
//     }
//     return newArr
// }

// let mappyMap = (arr, change) => {
//     let newArr = arr.map(user => {
//         return {...user, ...change}
//     })
//     return newArr
// }

// mapper(oldAccounts, {accessLevel: 'admin'})
// mappyMap(oldAccounts, {accessLevel: 'admin'})