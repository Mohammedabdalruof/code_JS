// # ( 45 )                  { بسم الله الرحمن الرحيم }

/*
    Loop
    -- Loop On Sequences
*/ 

let myfriends = [1, 2, "Osama", "Ahmed", 1, 2, 6, 7, "Sayed", "Ali"];

let onlyNames = [];

for (let i= 0; i < myfriends.length; i++) {
    if (typeof myfriends [i] === "string") {
        onlyNames.push(myfriends[i]);
    }
}

// if (typeof myfriends [0] === "string") {
//     onlyNames.push(myfriends[0]);
// }
// if (typeof myfriends [1] === "string") {
//     onlyNames.push(myfriends[1]);
// }
// if (typeof myfriends [2] === "string") {
//     onlyNames.push(myfriends[2]);
// }
// if (typeof myfriends [3] === "string") {
//     onlyNames.push(myfriends[3]);
// }
// if (typeof myfriends [4] === "string") {
//     onlyNames.push(myfriends[4]);
// }

console.log(onlyNames);

// console.log(myfriends[0]);
// console.log(myfriends[1]);
// console.log(myfriends[2]);
// console.log(myfriends[3]);
// console.log(myfriends[4]);

// for (let i = 0; i < myfriends.length; i++) {
//     console.log(i);
//     console.log(myfriends[i]);
// }