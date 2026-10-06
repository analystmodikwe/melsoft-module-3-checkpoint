// Calculating a worker's monthly net salary from a gross salary of R 45,000,
// after deducting 25% tax, 1% UIF, and R 2,500 medical aid.

let gross = 45000
let medicalAid = 2500

let tax= 25/100
tax = tax * gross

let uif= 1 / 100
uif = uif * gross

let net = gross - tax - uif - medicalAid;
// console.log(net)

//  A shopping cart total starts at 0. Three items are added at R 150, R 85, and R
// 220. Then a 10% discount is applied, then 15% VAT. Using +=, *=, 
let total = 0;

let item1 = 150
    item1 += total;
let item1Discount = item1 ;
    item1Discount *= 10/100;
    item1 -= item1Discount;
let item1VAT = item1
    item1VAT *= 15/100;
    item1 -= item1VAT
   
 
let item2 = 85
    item2 += total;
let item2Discount = item2;
    item2Discount *= 10/100;
    item2 -= item2Discount;
let item2VAT = item2
    item2VAT *= 15/100;
    item2 -= item2VAT
   

let item3 = 220
    item3 += total;
let item3Discount = item3;
    item3Discount *= 10/100;
    item3 -= item3Discount;
let item3VAT = item3
    item3VAT *= 15/100;
    item3 -= item3VAT
   
// a function to comment out the section header
function section(title) {
  console.log(`\n===== ${title} =====`);
};


