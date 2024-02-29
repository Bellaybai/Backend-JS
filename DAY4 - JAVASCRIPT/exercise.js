function checkEvenOrOdd(num){
    if(num%2 == 0){
        console.log(num, "is even.");
    }else{
        console.log(num, "is odd.");
    }

}
const num1 = 10;
const num2 = 7;

checkEvenOrOdd(num1);
checkEvenOrOdd(num2);

function calculateFactorial(a) {
    let result = 1;
    for (let i = 1; i <= a; i++) {
        result *= i;
        if (result > 32767) {
            return i - 1;  // Return the maximum valid A
        }
    }
    return a;  // A! is within the valid range for the given A
}

const maxA = calculateFactorial(20);  // You can start with a larger value if needed
console.log("Maximum valid A for 16-bit factorial:", maxA);