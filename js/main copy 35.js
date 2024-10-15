// # ( 35 )                  { بسم الله الرحمن الرحيم }

/*
    Switch Challenge
*/

let job = "Manager";
let salary = 0;

if (job === "Manager") {
    salary = 8000;
} else if (job === "IT" || job === "Support") {
    salary = 6000;
} else if (job === "Developer" || job === "Designer") {
    salary = 7000;
} else {
    salary = 4000;
}

// [Switch Challenge] حل 

switch (job) {
    case "Manager":
        salary = 8000;
        console.log(`My Manager is ${salary}`);
        break;
    case "IT" || "Support":
        salary = 6000;
        console.log(`My IT || Support is ${salary}`);
        break;
    case "Developer" || "Designer":
        salary = 7000;
        console.log(`My Developer || Designer is ${salary}`);
        break;
    default:
        salary = 4000;
        console.log(`is ${salary}`);
        break;
}

/*
    If Challenge
*/ 

let holidays = 0;
let money = 0;


switch (holidays) {
    case 0:
        money = 5000;
        console.log(`My Money is ${money}`);
        break;
    case 1:
    case 2:
        money = 3000;
        console.log(`My Money is ${money}`);
        break;
    case 3:
        money = 2000;
        console.log(`My money is $(money)`);
        break;
    case 4:
        money = 1000;
        console.log(`My Money is ${money}`);
        break;
case 5:
        money = 0;
        console.log(`My Money is ${money}`);
        break;
    default:
        money = 0;
        console.log(`My Money is ${money}`);
}

// [If Challenge] حل 

if (holidays === 0) {

    money = 5000;
    console.log(`My Money is ${money}`);

} else if (holidays === 1 || 2) {

    money = 3000;
    console.log(`My Money is ${money}`);

} else if (holidays === 3) {

    money = 2000;
    console.log(`My Money is ${money}`);

} else if (holidays === 4) {

    money = 1000;
    console.log(`My Money is ${money}`);

} else if (holidays === 5) {

    money = 0;
    console.log(`My Money is ${money}`);

} else {

    money = 0;
    console.log(`My Money is ${money})`);

}
