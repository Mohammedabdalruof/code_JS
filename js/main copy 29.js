// # ( 29 )                  { بسم الله الرحمن الرحيم }

/*
    Control Flow
    -- if
    -- else if
    -- else

    if (Condition) {
        // Block Of Code
    }
*/

let price = 100;
let discount = false;
let discountAmount = 30;
let country = "KSA";

if(discount === true){
    price -= discountAmount; // price = price - discountAmount
} else if (country === "Egypt"){
    price -= 40; // price = price - discountAmount

} else if (country === "syria"){
    price -= 50;
} else {
    price = 10;
}
console.log(price);
