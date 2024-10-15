// # ( 23 )                  { بسم الله الرحمن الرحيم }

/*
    String Methods
    -- Access With Index
    -- Access With charAt()
    -- Iength
    -- trim()
    -- toUpperCase()
    -- toLowerCase()
    -- Chain Methods
*/ 

let thName = "  Ahmed  ";
let thList = [1, 2, 3, 4, 5];

console.log(thName);


console.log(thName[1]);
console.log(thName[5]);

console.log(thName.charAt(1));
console.log(thName.charAt(5));

console.log(thName.length);

console.log(thName.trim());

console.log(thName.toUpperCase());
console.log(thName.toLowerCase());

console.log(thName.trim().charAt(2).toUpperCase()); // (m => M)