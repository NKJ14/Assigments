/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function measureTimeForSum(n) {
    // Record start time
    const startTime = new Date();

    // Calculate the sum
    calculateSum(n);

    // Record end time
    const endTime = new Date();

    // Calculate the time difference in seconds
    const timeDiffInSeconds = (endTime - startTime) / 1000;

    console.log(`Time taken to calculate sum from 1 to ${n}: ${timeDiffInSeconds} seconds`);
}

// Test cases
measureTimeForSum(100);
measureTimeForSum(100000);
measureTimeForSum(1000000000);