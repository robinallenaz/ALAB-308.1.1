// ALAB 308.1.1: Data Manipulation with JavaScript

// Part 1: Math Problems
console.log("Part 1: Math Problems");
console.log("-----------------------");

// Initial numbers that add up to 50
const n1 = 13;
const n2 = 25;
const n3 = 8;
const n4 = 4;

// Check if numbers add up to 50
const sum = n1 + n2 + n3 + n4;
const targetSum = 50;
const sumIsValid = sum === targetSum;

// Check if at least 2 numbers are odd
const odds = [n1, n2, n3, n4].filter(n => n % 2 === 1).length;
const hasEnoughOdds = odds >= 2;

// Check if any number is larger than 25
const isUnder25 = [n1, n2, n3, n4].every(n => n <= 25);

// Check if all numbers are unique
const uniqueNumbers = new Set([n1, n2, n3, n4]).size === 4;

// Final validity check
const isValid = sumIsValid && hasEnoughOdds && isUnder25 && uniqueNumbers;

// Additional requirements
// 1. Check if all numbers are divisible by 5
const allDivisibleBy5 = [n1, n2, n3, n4].every(n => n % 5 === 0);

// 2. Check if first number is larger than last
const firstLargerThanLast = n1 > n4;

// 3. Arithmetic chain
const arithmeticResult = ((n2 - n1) * n3) % n4;

// Logging results with template literals
console.log(`Numbers being evaluated: ${n1}, ${n2}, ${n3}, ${n4}`);
console.log(`The sum of all numbers is 50: ${sumIsValid}`);
console.log(`There are at least 2 odd numbers: ${hasEnoughOdds}`);
console.log(`All numbers are under or equal to 25: ${isUnder25}`);
console.log(`All numbers are unique: ${uniqueNumbers}`);
console.log(`The four numbers are valid according to all criteria: ${isValid}`);
console.log(`All numbers are divisible by 5: ${allDivisibleBy5}`);
console.log(`The first number is larger than the last: ${firstLargerThanLast}`);
console.log(`The result of the arithmetic chain is: ${arithmeticResult}`);

// Part 2: Practical Math
console.log("\nPart 2: Practical Math");
console.log("-----------------------");

// Constants for the road trip
const totalDistance = 1500; // miles
const fuelBudget = 175; // dollars
const fuelCost = 3; // dollars per gallon

// Function to calculate trip metrics
function calculateTripMetrics(speed, mpg) {
    const gallonsNeeded = totalDistance / mpg;
    const fuelExpense = gallonsNeeded * fuelCost;
    const tripTime = totalDistance / speed;
    const isWithinBudget = fuelExpense <= fuelBudget;

    console.log(`\nAt ${speed} mph:`);
    console.log(`Fuel needed: ${gallonsNeeded.toFixed(2)} gallons`);
    console.log(`Fuel expense: $${fuelExpense.toFixed(2)}`);
    console.log(`Trip duration: ${tripTime.toFixed(2)} hours`);
    console.log(`Within budget: ${isWithinBudget}`);
    
    return { gallonsNeeded, fuelExpense, tripTime, isWithinBudget };
}

// Calculate metrics for different speeds
const at55 = calculateTripMetrics(55, 30);
const at60 = calculateTripMetrics(60, 28);
const at75 = calculateTripMetrics(75, 23);

// Determine the most efficient speed
console.log("\nAnalysis:");
if (at55.fuelExpense < at60.fuelExpense && at55.fuelExpense < at75.fuelExpense) {
    console.log("Traveling at 55 mph is most fuel-efficient and cost-effective, but takes the longest time.");
} else if (at60.fuelExpense < at75.fuelExpense) {
    console.log("Traveling at 60 mph provides a good balance between fuel efficiency and time.");
} else {
    console.log("Traveling at 75 mph is fastest but least fuel-efficient and most expensive.");
}
