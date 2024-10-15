// # ( 63 )                  { بسم الله الرحمن الرحيم }

/*
    Scope
    - Global And Local Scope
*/ 

// var a 1;
// let b 1;

function showText() {
    var a = 10;
    let b = 20;
    console.log(`Function - From Local ${b}`);
    console.log(`Function - From Local ${a}`);
}

console.log(`From Global ${a}`); // Error
console.log(`From Global ${b}`); // Error

showText();