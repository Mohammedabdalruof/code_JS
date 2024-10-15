// # ( 55 )                  { بسم الله الرحمن الرحيم }

/*
    Function
    - Return
    - Automatic Semicolon Insertion [No Line Terminator Allowed]
    - Interruptting
*/

function generates (start, end) {
    for (let i = start; i <= end; i++) {
        if (i === 15) {
            return `Interruptting`;
        }
console.log(i)
    }
}

generates (10, 20);