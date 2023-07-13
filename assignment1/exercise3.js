

//Execise 3
// Step 1: Answer
let principalAmount = 1000;
let interestRate = 0.05;
let timePeriod = 5;
let n = 12;

// Step 2:Answer
let compoundInterest = principalAmount * Math.pow(1 + interestRate / 12, 12 * timePeriod);

// Step 3: Answer
compoundInterest = compoundInterest.toFixed(2);

// Step 4: Answer
console.log(`Compound Interest = ${compoundInterest}`);

// Step 5: Answer
interestRate -= 0.01;

// Step 6: Answer
let newCompoundInterest = principalAmount * Math.pow(1 + interestRate / 12, 12 * timePeriod);

// Step 7: Answer
let difference = newCompoundInterest - compoundInterest;

// Step 8: Answer
let newComInt = `New Compound Interest = ${newCompoundInterest}`
console.log(newComInt);
let diff = `Difference = ${difference}`
console.log(diff);

// Step 9: Answer
let cents = (compoundInterest.toString().split('.')[1] || '') + '00';

// Step 10: Answer
let compInt = `Cents from Compound Interest = ${cents.substring(0,2)}`
console.log(compInt);

// Step 11: Answer
let totalAmount = principalAmount + parseFloat(compoundInterest);

// Step 12: Answer
let result = `Total Amount = ${totalAmount.toLocaleString()}`
console.log(result);