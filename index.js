// Collecting user calculation input.
let num1 = prompt("Enter first number: ");
num1 = parseFloat(num1);
let operator = prompt("Enter either +, -, *, / :");
let num2 = prompt("Enter second number: ");
num2 = parseFloat(num2);

// using if and else statements to carry out user mathematical operation.
if (operator === "+") {
    let sum = num1 + num2;
    alert(`Sum = ${sum}`);
}
else if(operator === "-") {
    let difference = num1 - num2;
    alert(`Difference = ${difference}`);
}
else if(operator === "*") {
    let product = num1 * num2;
    alert(`Product = ${product}`);
}
else if(operator === "/") {
    let quotient = num1 / num2;
    alert(`Quotient = ${quotient}`);
}
else{
    alert(`You enter a wrong operator.`);
}