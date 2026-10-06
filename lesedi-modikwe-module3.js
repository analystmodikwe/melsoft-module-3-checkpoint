// Example scenario: Calculate a worker's monthly net salary from a gross salary of R 45,000,
// after deducting 25% tax, 1% UIF, and R 2,500 medical aid. Use at least three different
// arithmetic operators

let gross = 45000
let medicalAid = 2500
let tax= gross * 0.25
let uif= gross * 0.01
let net = gross - tax - uif - medicalAid;
console.log(net)