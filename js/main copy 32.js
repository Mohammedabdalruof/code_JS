// # ( 32 )                  { بسم الله الرحمن الرحيم }
/*
    Logical Or ||
    -- Null + Undefind + Any Falsy Value
    Nullish Coalescing Operator ??
    --Null + Undefind
*/ 

console.log(Boolean(100))
console.log(Boolean(-100))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean (null))

let price = 0;

console.log(`The price Is ${price || 200}`)
console.log(`The price Is ${price ?? 200}`)