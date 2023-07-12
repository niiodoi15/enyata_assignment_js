// Step 1: Answer
const fullName = 'David Djokaeff';

// Step 2: Answer
const firstName = fullName.split(' ')[0];
const lastName = fullName.split(' ')[1];

// Step 3: Answer
const capitalizedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

// Step 4: Answer
const reversedLastName = lastName.split('').reverse().join('');

// Step 5: Answer
const fullNameLength = fullName.length;

// Step 6: Answer
const containsLetterA = fullName.toLowerCase().includes('a');

// Step 7: Answer
console.log(`Full Name: ${fullName}`);
console.log(`First Name: ${capitalizedFirstName}`);
console.log(`Last Name (Reversed): ${reversedLastName}`);
console.log(`Full Name Length: ${fullNameLength}`);
console.log(`Contains Letter A?: ${containsLetterA}`);