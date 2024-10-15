// # ( 64 )                  { بسم الله الرحمن الرحيم }

/*
    Scope
    - Block Scope [If, Switch, For]
*/ 

var x = 10

if (10 === 10) {
    let x = 50
    console.log(`From If Block ${x}`);
}

console.log(`From Global ${x}`);

// var a = 1
// let b = 1j

// function showText() {
//     var a = 10;
//     let b = 20;
//     console.log(`Function From Local ${a}`);
//     console.log(`Function From Local ${b}`);
// }

// console.log(`From Global ${a}`);
// console.log(`From Global ${b}`);

// showText();