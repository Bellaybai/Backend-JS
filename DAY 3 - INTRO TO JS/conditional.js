//Conditional
//Conditionals: if statement
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote!")
}

//if else if-else statement
let temprature = -1;
if (temprature < 0) {
    console.log("It is freezing!");
} else if (temprature >= 0  && temprature < 20) {
    console.log("It's cool outside!");
} else {
    console.log("It's a warm day.");
}

let day = "Monday";
switch (day){
    case "Monday":
        console.log("It's the start of the week.");
    break;
    case "Friday":
        console.log("It's the end of the week.");
    break;
    default:
        console.log("This is an ordinary day.");
        break;
}