// # ( 57 )                  { بسم الله الرحمن الرحيم }

/*
    Function
    - Rest Parameters
    - Only One Allowed
    - Must Be Last Element
*/

function calc(...numbers) {
    // console.log(Array.isArray (numbers));
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i]; // result += numbers[i];
    }
    return `Finl Result Is ${result}`;
}

console.log(calc(10, 20, 10, 30, 50, 30));