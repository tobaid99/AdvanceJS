// Exercise 1

// let arr = [5, 3, 8, 1]

// const filterRange = (arr,a,b) => {
//     const filtered = [];
//     for(let x of arr){
//         if ((x >= a && x<= b) || (x <= a && x>= b)){
//             filtered.push(x);
//         }
//     }
//     return filtered
// }

// console.log(filterRange(arr,1,4));



// Exercise 2


// let john = { name: "John", age: 25 }
// let pete = { name: "Pete", age: 30 } 
// let mary = { name: "Mary", age: 28 }

// let users = [ john, pete, mary ]

// let names = users.map(x => x.name);

// alert( names ) // John, Pete, Mary


//Exresice 3




let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 29 }

const getAverageAge = users => {
    let total = 0;
    let ages =users.map(user => user.age)
    for(let age of ages){
        total += age
    }
    return total/ ages.length
}


console.log(getAverageAge(userAgeArr));

