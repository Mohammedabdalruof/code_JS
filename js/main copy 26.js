// # ( 26 )                  { بسم الله الرحمن الرحيم }

/*
    String Challenge
    All Solutions Must Be In One Chain
    You Can Use Concatenate
*/

let a = "Elzero Web School";


// Include This Methods In Your Solution [slice, charAt]
console.log(); // Zero

// 8 H
console.log(); // HHHHHHHH

// Return Array
console.log(); // [Elzero]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(); // Elzero School

// Solution Must Be Dynamic And String May Change
console.log(); // eLZERO WEB SCHOOl



// [Challenge] حل ال



console.log(a.length);

// Include This Methods In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// 8 H
console.log(a.slice(13, 14).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(" ", 1)); // [Elzero]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0, 7) + a.substr(11)); // Elzero School

// Solution Must Be Dynamic And String May Change
console.log(a.charAt(0).toLowerCase() + a.slice(1, -1).toUpperCase() + a.slice(-1).toLowerCase()); // eLZERO WEB SCHOOl
