// # ( 10 )                  { بسم الله الرحمن الرحيم }

/*
    Template Literals (Template Strings)
*/ 

let a = "We Love";
let b = "JavaScript";
let c = "And";
let d = "Programming";

console.log(a + " " + b +"\n"+ c + " " + d);

console.log(`${a} "" ${b}
    ${c} \\ ${d}`);

let title = "Elzero";
let desc = "Elzero Web School";

let marKup = `
    <div class="card">
        <div class="child">
            <h2>${title}</h2>
            <p>${desc}</p>
        </div>
    </div>
`;

document.write(marKup);