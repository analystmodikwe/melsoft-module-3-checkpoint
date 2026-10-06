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

// let membershipBadge = PremiumMemeber ? "Premium" : TrailMember ? "trail" : "Free Memeber";

// . String concatenation (the + operator doing double duty)
// Example scenario: Build a greeting that pulls firstName, lastName, and age from variables and
// produces: 'Welcome back Thabo Nkosi, you are 28 years old.' Do this using the + operator for
// concatenation. Then show the SAME greeting using a template literal and comment on which is
// better and why

let firstName  = "Thabo";
let lastName = "Nkosi";
let age = 28;
let greating = "Welcome Back"+ " " + firstName + " " + lastName + " "+ "You Are" + " " + age;

//  with template literals
let greating2 = `Welcome Back ${firstName} ${lastName} You Are ${age}`

// the one with template literal is better because you avoiding using many + and empty string for indentation 

// Interview answer required at the end (comment block):
// 1 What is the difference between prefix (++x) and postfix (x++) increment? Show it with a one-line code example where they produce different outputs.
//  The (++x) prefix will perform the operation and return the new value
let year = 2025;
console.log(++year)
// postfix (x++) perform the operation by changing the value but will return the value before change
let year2 = 2025;
console.log(year2++)

// 2 The modulo operator (%) is one of the most-asked-about operators in interviews. Give THREE concrete, real-world uses for it. (One is even/odd, think of two more.)
// when checking if a number is even or odd
// creating a clock that resets after 12 hours
// generating a sequence of numbers within a specific range

// 3 In your Challenge 1 Section 6 example, you nested a ternary. Is nested ternary good practice? When should you NOT use it?
//  no its not, nested ternary can make the code hard to read and understand, especially when there are multiple conditions. It is better to use if-else statements or switch cases for complex logic to improve readability and maintainability.


// a function to comment out the section header for readability
function section(title) {
  console.log(`\n===== ${title} =====`);
};

//  Predict and verify (6 marks)
// For each of the 20 comparisons below, write a comment with your PREDICTION BEFORE you
// run it. Then console.log the actual result. For each case, add a one-line note explaining WHY
section("Part A")
//1. true because its equality, their data types are not checked and false defaults to 0
console.log(0 == false);

// 2 false because its identity it expects each and everything to be equal
console.log(0 === false);

// 3 true, because its not a number and its an empty string which equates to zero
console.log("" == 0);

// 4 false, because its not a number and its an empty string which equates to zero but === will check both the value and datatype
console.log("" === 0);

// 5 true because the value is is the same even though the data type is different == does not not check data type
console.log("0" == 0);

// 6 false because the value is the same but  the data type is different and === expects value and data type to be the same 
console.log("0" === 0);

// 7 true because null is just zero and undefined has no value so its also zero even though they are different types == will read them as 0
console.log(null == undefined);

// 8 false because null and undefined are off different types 
console.log(null === undefined);

// 9 true, because null is 0 == will read both as zero
console.log(`${9}, ${null == 0}`) // i was wrong here, the answer is false, because javascript doest convert null into a number when using ==

// 10 true because i am using relational operator and it turns null to a number
console.log(`${10}, ${null >= 0}`)

// 11 false because i am using relational operator and it turns null to a number so it will be zero and zero is not greater than zero but equals to
console.log(`${11}, ${null > 0}`)

// 12 false because NaN cannnot be equal to itself it represents an invalid or undefined numeric result.
console.log(`${12}, ${NaN == NaN}`)

// 13 false because NaN cannnot be equal to itself it represents an invalid or undefined numeric result.
console.log(`${13}, ${NaN === NaN}`)

// 14 true because object uses different comparison rule from == and === which makes two NaN values to be the same 
console.log(`${14}, ${Object.is(NaN, NaN)}`)

// 15 false because positive zero cannot be = to negative zero 
console.log(`${15}, ${+0 === -0}`) // i was wrong here, the answer is true because when using ===, +0 and -0 are considerd equal

// 16 false because +0 and -0 are not the same 
console.log(`${16}, ${Object.is(+0, -0)}`)

// 17 true because the values are the same 
console.log(`${17}, ${[1,2,3] == "1,2,3"}`)

// 18 true because an empty array will be 0 which is false 
console.log(`${18}, ${[] == false}`)

// 19 true because an empty array will be 0 
console.log(`${19}, ${ [] == 0}`)

//20  true because the value in an array is zero and false is also 0
console.log(`${20}, ${[0] == false}`)

// Real-world form validator
section ("PART B, test case 1 all case pass")
// TEST CASE 1 all pass
let newPassword = "Admin123456789"
let confirmPassword = "Admin123456789"
let currentEmail = "admin@gmail.com"
let confirmEmail = "admin@gmail.com"

let validatePassword = newPassword === confirmPassword; // this will be true including type

let validateEmail = currentEmail === confirmEmail; // currentEmail and confirmEmail match EXACTLY

let checkSimilarity = newPassword !== currentEmail; // newPassword is NOT the same as the current email 

let newPasswordLength =  newPassword.length >= 8; //newPassword length is at least 8 characters

console.log(`test1 password match: ${validatePassword ? "PASS" : "FAIL"}`);
console.log(`test2 email match: ${validateEmail ? "PASS" : "FAIL"}`);
console.log(`test3 similarity check: ${checkSimilarity ? "PASS" : "FAIL"}`);
console.log(`test4 passwordLength check: ${newPasswordLength ? "PASS" : "FAIL"}`);

section ("PART B, test case 2 two case fail")
// TEST CASE 2 two case fail














