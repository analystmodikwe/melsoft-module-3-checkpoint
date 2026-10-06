//Arithmetic (3 operators minimum, including modulo)
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

// Assignment (at least 3 compound operators)
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

//  Comparison
// Example scenario: Validate a signup form. User must be at least 18 years old, password must
// have at least 8 characters, and confirmed email must exactly match the typed email. Show all
// four comparison operators that make sense here
let user = 18;
let password = "thokoza123456789";
let email = "user@example.com";
let confirmedEmail = "user@example.com";

// four comparison operators that make sence here
let isOld = user >= 18 // the user will be exactely 18 or older 
let passwordValidation = password.length >= 8 // the password will be at least 8 characters long
let passwordNotLong = password.length <= 25 //the password wont be more than 25 characters
let userEmail = email === confirmedEmail; // the email and confirmed email will be exactly the same
let passwordNotEmail = password !== email; // strictly not equal, password and email wont be the same

// Logical
// A user can access the premium dashboard IF (they are logged in AND their
// email is verified) OR (they are an admin)

let isUserLoggedIn = true;
let isEmailVerified = true;
let isUserAdmin = true;

let userAccessCheck1 = isUserLoggedIn && isEmailVerified; //will check if the user is logged in and the email is verified both are true
let userAccessCheck2 = isUserAdmin || isEmailVerified;// will check if the user if admin and if true the whole statment will be true since its OR
let denyAccess1 = !isUserLoggedIn  // turn true to false so user will be deied access if they are not logged in
let denyAccess2 = !isEmailVerified // turn true to false so user will be deied access if email is not varified
let denyAccess3 = !isUserAdmin // turn true to false so user will be denied access if they are not admin

// Unary
// Example scenario: Convert the string '25' from a form field into a number using the unary +
// operator. Then toggle a boolean 'isDarkMode' flag using !

let num = "25";
let numToString = +num; // turning "25" to an number

let isDarkMode = true; // the darkmode is on (true)
    isDarkMode = !isDarkMode; // the darkmode is off (false)

    isDarkMode = !isDarkMode //now its back on (true)

// Ternary / Conditional
// Example scenario: Display a membership badge: 'Premium Member' if membershipType is
// 'premium', 'Free Member' otherwise. Then nest a ternary to also handle 'trial' as 'Trial
// Member'

let membershipBadge = PremiumMemeber ? "Premium" : TrailMember ? "trail" : "Free Memeber";

// . String concatenation (the + operator doing double duty)
// Example scenario: Build a greeting that pulls firstName, lastName, and age from variables and
// produces: 'Welcome back Thabo Nkosi, you are 28 years old.' Do this using the + operator for
// concatenation. Then show the SAME greeting using a template literal and comment on which is
// better and why

let firstName  = "Thabo";
let lastName = "Nkosi";
let age = 28;

let greating = "Welcome Back"+ " " + firstName + " " + lastName + " "+ "You Are" + " " + age;

console.log(greating)
   
// a function to comment out the section header
function section(title) {
  console.log(`\n===== ${title} =====`);
};


