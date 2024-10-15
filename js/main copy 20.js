// # ( 20 )                  { بسم الله الرحمن الرحيم }

/*
    Number Methods
    -- Tow Dots To Call A Methods
    -- toString()
    -- toFixed()
    -- parseInt()
    -- parseFloat()
    -- isInteger() [ES6]
    -- isNaN() [ES6]
*/ 

console.log((100).toString());
console.log(100..toString());

console.log(100.554555.toFixed(2));

console.log(Number("100 Osama"));

console.log(+("100 Osama"));

console.log(parseInt("100 Osama"));

console.log(parseInt("Osama 100 Osama"));

console.log(parseInt("100"));

console.log(parseInt("100.55"));

console.log(parseFloat("100.55 Osama"));

console.log(Number.isInteger("100")); // false
console.log(Number.isInteger(100.500)); // false
console.log(Number.isInteger(100)); // true

console.log(Number.isNaN("Osama")); // false