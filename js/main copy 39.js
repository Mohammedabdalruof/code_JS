// # ( 39 )                  { بسم الله الرحمن الرحيم }

/*
    Arrays Methods [Search]
    -- indexOf(Search Element, From Index [Opt])
    -- lastIndexOf (Search Element, From Index [0pt])
    -- includes (valueToFind, fromIndex [Opt]) [ES6]
    --
*/ 

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed" ];

console.log(myFriends);

console.log(myFriends.indexOf("Ahmed"));
console.log(myFriends.indexOf("Ahmed", 2));

console.log(myFriends.lastIndexOf("Ahmed"));
console.log(myFriends.lastIndexOf("Ahmed", -2));

console.log(myFriends.includes ("Ahmed"));
console.log(myFriends.includes ("Ahmed", 2));

if (myFriends.lastIndexOf("Osama") === -1) {
console.log("Not Found");
}
console.log(myFriends.lastIndexOf("Osama"));
console.log(myFriends.indexOf("Osama"));