// # ( 65 )                  { بسم الله الرحمن الرحيم }

/*
    Scope
    - Lexical Scope

    Search
    - Execution Context
    - Lexical Environment
*/

function parint () {
    let a = 10;

    function child () {
        console.log(a);
        console.log(`From Child ${b}`);

        function grand () {
            let b = 100; 
            console.log(`From Grand ${a}`);
            console.log(`From Grand ${b}`);
        }
        grand();
    }
    child();
}
parint ();