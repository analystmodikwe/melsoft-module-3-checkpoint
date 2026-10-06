// Calculating a worker's monthly net salary from a gross salary of R 45,000,
// after deducting 25% tax, 1% UIF, and R 2,500 medical aid.

let gross = 45000
let medicalAid = 2500

let tax= 25/100
tax = tax * gross

let uif= 1 / 100
uif = uif * gross

let net = gross - tax - uif - medicalAid;
console.log(net)

//  A shopping cart total starts at 0. Three items are added at R 150, R 85, and R
// 220. Then a 10% discount is applied, then 15% VAT. Using +=, *=, 
let total = 0;
let discount = 10 / 100
let vat = 15 / 100

let item1 = 150
item1 += total;
item1 *= discount

let item2 = 85
item2 += total;
item2 *= discount

let item3 = 220
item3 += total;
item3 *= discount

console.log(discount)


