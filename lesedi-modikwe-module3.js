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

section ("PART B, test case 2, two case fail")
// TEST CASE 2, two case fail

newPassword = "Adm" //too short
confirmPassword = "Ain129" //doesnt match
currentEmail = "admin@gmail.com"
confirmEmail = "admin@gmail.com"

validatePassword = newPassword === confirmPassword; // this will be true including type

validateEmail = currentEmail === confirmEmail; // currentEmail and confirmEmail match EXACTLY

checkSimilarity = newPassword !== currentEmail; // newPassword is NOT the same as the current email 

newPasswordLength =  newPassword.length >= 8; //newPassword length is at least 8 characters

console.log(`test1 password match: ${validatePassword ? "PASS" : "FAIL"}`);
console.log(`test2 email match: ${validateEmail ? "PASS" : "FAIL"}`);
console.log(`test3 similarity check: ${checkSimilarity ? "PASS" : "FAIL"}`);
console.log(`test4 passwordLength check: ${newPasswordLength ? "PASS" : "FAIL"}`);

// I used === (strict equality). It compares both value and type, === guarantees the two passwords are exactly the same.

section ("Challenge 3 — Operator Precedence")

//1, the answer will be 13  *comes first, + second, - last
console.log(`${"1:"} ${2 + 3 * 4 - 1}`)

// 2 , Order: brackets first, left one (2+3=5), right one (4-1=3), then * (5*3=15)
console.log("2:", (2 + 3) * (4 - 1));

// 3. Prediction: 4
// Same priority, so left to right: (10-4=6), then (6-2=4)
console.log("3:", 10 - 4 - 2);

// 4. Prediction: 12
// i was wrong , ** is right-associative, so the RIGHT one goes first: (3**2=9), then (2**9=512)
console.log("4:", 2 ** 3 ** 2);

// 5. Prediction: 3
// % and * have the same priority, so left to right: (10%3=1), (1*2=2), then + (2+1=3)
console.log("5:", 10 % 3 * 2 + 1);

// 6. Prediction: 5
// / is left to right: (100/4=25), then (25/5=5)
console.log("6:", 100 / 4 / 5);

// 7. Prediction: true
// Order: + first (5+2=7), then comparisons (7>6 is true, 3<4 is true), then && (true && true = true)
console.log("7:", 5 + 2 > 6 && 3 < 4);

// 8. Prediction: true
// && beats ||, so: (true && false = false), (true && true = true), then || (false || true = true)
console.log("8:", true && false || true && true);

// 9. Prediction: false
// ! goes first: !false = true, and !!0 is !(!0), so !0 = true, !true = false
// Then && (true && false = false)
console.log("9:", !false && !!0);

// 10. Prediction: true
// Comparisons first: 5>3 is true, 10<20 is true, 2==="2" is false (different types)
// Then ! flips it (!false = true), then && (true && true = true), then || (true || true = true)
console.log("10:", 5 > 3 && 10 < 20 || !(2 === "2"));

// 11. Prediction: 1035
// * is left to right: (1000*1.15=1150), then (1150*0.9=1035)
// Order matters for rounding in real money code (decimals can drift slightly)
console.log("11:", 1000 * 1.15 * 0.9);

// 12. Prediction: "number1"
// typeof is a unary operator, so it goes BEFORE +: typeof 5 = "number"
// Then + joins the text: "number" + 1 = "number1"
console.log("12:", typeof 5 + 1);

// 13. Prediction: "number"
// Brackets first (5+1=6), then typeof 6 = "number"
console.log("13:", typeof (5 + 1));

// 14. Prediction: "56"
// * first (3*2=6), then + with a string joins them: "5" + 6 = "56"
console.log("14:", "5" + 3 * 2);

// 15. Prediction: 4
// Left to right: "5" - 3 forces a number (5-3=2), then 2 + 2 = 4
console.log("15:", "5" - 3 + 2);

// I would add parentheses even when precedence rules would work, because code is read
// far more often than it is written. Brackets make my intent obvious to other
// developers and to me in six months, especially when mixing && with || or
// mixing + with string joining. They also protect against bugs if someone
// edits the expression later and misremembers the precedence order.

section("Challenge 4 — Ternary and Short-Circuit Patterns")
section("PART A")
let Grade=95 //A
    Grade=82 //B
    Grade=73  //C
    Grade=65 //D
    Grade=54 //E
    Grade=42 //F
    Grade=0 //F
    Grade=100 //A
console.log(
    Grade >=90 ? "A" : 
    Grade >=80 ? "B" :
    Grade >= 70 ? "C" :
    Grade >= 60 ? "D" :
    Grade >= 50 ? "E" :
    "F" 
);

section("Part B test 1");
 // || uses the default when the left side is FALSY (undefined, null, "", 0, false)
// ?? uses the default ONLY when the left side is null or undefined

let user1 = {}; //an empty object, so every property is undefined
let displayName1 = user1.displayName || "Guest User"; // undefined is falsy -> "Guest User"
let theme1 = user1.theme || "light";                  // undefined is falsy -> "light"
let maxResults1 = user1.maxResults || 10;             // undefined is falsy -> 10
let lastLogin1 = user1.lastLogin ?? "Never";          // undefined -> "Never"
let notificationCount1 = user1.notificationCount ?? 0; // undefined -> 0

console.log("Test 1 displayName:", displayName1);           // Guest User
console.log("Test 1 theme:", theme1);                       // light
console.log("Test 1 maxResults:", maxResults1);             // 10
console.log("Test 1 lastLogin:", lastLogin1);               // Never
console.log("Test 1 notificationCount:", notificationCount1); // 0

section("test2")
//  test 2  notificationCount is 0 and theme is "

let user2 = {
    displayName: "Lesedi",
    theme: "",              // empty string is falsy
    maxResults: 25,
    lastLogin: "2026-10-05",
    notificationCount: 0    // zero is falsy, but it is a real value
};

let displayName2 = user2.displayName || "Guest User";
let theme2 = user2.theme || "light";                   // "" is falsy -> replaced with "light"
let maxResults2 = user2.maxResults || 10;
let lastLogin2 = user2.lastLogin ?? "Never";
let notificationCount2 = user2.notificationCount ?? 0; // 0 is NOT null/undefined -> stays 0

console.log("Test 2 displayName:", displayName2);           // Lesedi
console.log("Test 2 theme:", theme2);                       // light
console.log("Test 2 maxResults:", maxResults2);             // 25
console.log("Test 2 lastLogin:", lastLogin2);               // 2026-10-05
console.log("Test 2 notificationCount:", notificationCount2); // 0

// WHY ?? and || behave differently:
// || treats ANY falsy value as "missing", so theme "" became "light".
// That is fine for theme, because an empty theme is not useful.
// ?? only treats null and undefined as "missing", so notificationCount
// stayed 0. Zero is a valid count (no notifications), and using || here
// would wrongly replace it with the default.

section("PART C");

// Three test users: full data, missing address, and user is null
let fullUser = { name: "Thabo", address: { city: "Johannesburg" } };
let noAddress = { name: "Naledi" };
let nullUser = null;

// ---------- Full data ----------
// Technique 1: && stops at the first falsy value, so we never read a property of undefined/null
console.log("Full data, 1 (&&):", fullUser && fullUser.address && fullUser.address.city);
// Technique 2: ?. stops and returns undefined as soon as something is null/undefined
console.log("Full data, 2 (?.):", fullUser?.address?.city);
// Technique 3: ?. plus ?? gives a default when the result is null/undefined
console.log("Full data, 3 (?. ??):", fullUser?.address?.city ?? "Unknown city");

// ---------- Missing address ----------
console.log("No address, 1 (&&):", noAddress && noAddress.address && noAddress.address.city);
console.log("No address, 2 (?.):", noAddress?.address?.city);
console.log("No address, 3 (?. ??):", noAddress?.address?.city ?? "Unknown city");

// ---------- User is null ----------
console.log("Null user, 1 (&&):", nullUser && nullUser.address && nullUser.address.city);
console.log("Null user, 2 (?.):", nullUser?.address?.city);
console.log("Null user, 3 (?. ??):", nullUser?.address?.city ?? "Unknown city");

// Note: technique 1 prints null for the null user, because && returns the
// first falsy value it meets (the null itself). ?. always returns undefined.

section ("PART D");
// 1. Prediction: "finally" (string)
// null, undefined, 0 and "" are all falsy, so || keeps going to the last value
let r1 = null || undefined || 0 || "" || "finally";
console.log("1:", r1, typeof r1);

// 2. Prediction: 0 (number)
// null and undefined are skipped by ??, but 0 is NOT nullish, so it stops there
let r2 = null ?? undefined ?? 0 ?? "" ?? "finally";
console.log("2:", r2, typeof r2);

// 3. Prediction: "first truthy" (string)
// 0 is falsy, so || moves on to the right side
let r3 = 0 || "first truthy";
console.log("3:", r3, typeof r3);

// 4. Prediction: 0 (number)
// 0 is not null/undefined, so ?? keeps it and never looks at the right side
let r4 = 0 ?? "first non-nullish";
console.log("4:", r4, typeof r4);

// 5. Prediction: false (boolean)
// true is truthy so && continues, false is falsy so && stops and returns it
// "never reached" is never evaluated (short-circuit)
let r5 = true && false && "never reached";
console.log("5:", r5, typeof r5);

// 6. Prediction: "third" (string)
// All three are truthy, so && returns the last value
let r6 = "first" && "second" && "third";
console.log("6:", r6, typeof r6);

// 7. Prediction: "yes" (string)
// Brackets first: true && "yes" gives "yes"
// Then false || "yes": false is falsy, so || returns "yes"
let r7 = false || (true && "yes");
console.log("7:", r7, typeof r7);

// 8. Prediction: "yes" (string)
// Brackets first: false || true gives true
// Then true && "yes": true is truthy, so && returns the last value, "yes"
let r8 = (false || true) && "yes";
console.log("8:", r8, typeof r8);

// 9. Prediction: 3 (number)
// All values are truthy, so && returns the last one
let r9 = 1 && 2 && 3;
console.log("9:", r9, typeof r9);

// 10. Prediction: undefined (undefined)
// null?.foo stops right away because the left side is null,
// so the rest of the chain (?.bar?.baz) is skipped
let r10 = null?.foo?.bar?.baz;
console.log("10:", r10, typeof r10);


section("Challenge 5 - typeof, instanceof, delete");
section("PART A");

// typeof returns a STRING naming the type of a value

// 1. Prediction: "number"
console.log("1:", typeof 42);

// 2. Prediction: "string"
console.log("2:", typeof "hello");

// 3. Prediction: "boolean"
console.log("3:", typeof true);

// 4. Prediction: "undefined"
console.log("4:", typeof undefined);

// 5. Prediction: "object" 
// null is not really an object. This is a mistake from the first version of
// JavaScript that was never fixed, because fixing it would break old websites.
console.log("5:", typeof null);

// 6. Prediction: "object"
console.log("6:", typeof {});

// 7. Prediction: "object" 
// Arrays are a special kind of object, so typeof cannot tell them apart from {}
console.log("7:", typeof []);

// 8. Prediction: "function"
// Functions are objects too, but typeof gives them their own result
console.log("8:", typeof function() {});

// 9. Prediction: "number"
// NaN means "Not a Number", but it is still a value of the number type
console.log("9:", typeof NaN);

// 10. Prediction: "undefined"
// It does not throw because typeof is built to be safe: if the variable
// was never declared, it just reports "undefined" instead of crashing.
// Using the variable by itself (console.log(undeclaredVariable)) WOULD
// throw a ReferenceError, because JavaScript tries to read it.
console.log("10:", typeof undeclaredVariable);

// One-liner to tell an array from an object:
// Array.isArray() returns true only for real arrays
console.log("Array.isArray([]):", Array.isArray([]));   // true
console.log("Array.isArray({}):", Array.isArray({}));   // false

section("PART B");

// instanceof checks whether a value was created by a certain type (constructor)
// and returns true or false

// 1. Prediction: true
console.log("1:", [] instanceof Array);

// 2. Prediction: true
// Arrays are objects, so they are an instance of Object as well
console.log("2:", [] instanceof Object);

// 3. Prediction: true
console.log("3:", {} instanceof Object);

// 4. Prediction: false
// "hello" is a primitive (a plain value), not an object created with String
console.log("4:", "hello" instanceof String);

// 5. Prediction: true
// new String() creates a String OBJECT, so instanceof works
console.log("5:", new String("hello") instanceof String);

// 6. Prediction: false
// 42 is a primitive number, not an object, so the same rule as number 4 applies
console.log("6:", 42 instanceof Number);

// 7. Prediction: true
console.log("7:", new Date() instanceof Date);

// 8. Prediction: true
console.log("8:", /abc/ instanceof RegExp);

// ONE case where typeof is right and instanceof is wrong:
// Checking primitives (strings, numbers, booleans). typeof "hello" gives
// "string", but "hello" instanceof String is false, so instanceof gives
// the wrong answer for primitives.

// ONE case where instanceof is right and typeof is wrong:
// Telling kinds of objects apart (arrays, dates, regular expressions).
// typeof gives "object" for all of them, but instanceof can tell that
// new Date() is a Date and /abc/ is a RegExp.


section("PART C");

// delete removes a property from an object and returns true or false.
// true = the property is gone (or never existed), false = it could not be removed.

// ---------- 1. Deleting an object property ----------
const users = { name: 'Lerato', age: 25, role: 'student' };

console.log("1 before:", users);          // { name: 'Lerato', age: 25, role: 'student' }
delete users.role;                        // removes the role property completely
console.log("1 after:", users);           // { name: 'Lerato', age: 25 }

// ---------- 2. Deleting a variable ----------
let x = 5;
// @ts-ignore
console.log("2 delete returned:", delete x); // false
console.log("2 x is still:", x);             // 5

// delete only works on object properties, NOT on variables declared
// with let, const or var. It returns false and nothing changes.
// (In strict mode this would be a SyntaxError instead.)

// ---------- 3. Deleting an array element ----------
const arr = [1, 2, 3, 4];
delete arr[1];                           // returns true, but see the result below

console.log("3 arr:", arr);              // [ 1, <1 empty item>, 3, 4 ]
console.log("3 length:", arr.length);    // 4 (still 4!)
console.log("3 arr[1]:", arr[1]);        // undefined

// Why delete on arrays is dangerous:
// delete does NOT shift the other elements or shrink the array. It just
// leaves an empty "hole" at that position, and the length stays 4.
// The array now has a gap, which breaks loops and methods that expect
// every position to hold a value, and it makes bugs hard to spot.

// ---------- 4. Deleting a built-in ----------
console.log("4 delete returned:", delete Math.PI); // false
console.log("4 Math.PI is still:", Math.PI);       // 3.141592653589793

// I would not use delete to remove an item from an array, because it
// leaves an empty hole and does not change the length, so the array ends
// up with a gap that can cause bugs in loops and calculations. Instead I
// would use splice(index, 1), which removes the item and shifts the rest
// down, or filter(), which returns a new array without the unwanted item.

// this is how i would do it:
const items = ["a", "b", "c", "d"];
items.splice(1, 1);                      // removes 1 item at position 1 ("b")
console.log("splice result:", items);    // [ 'a', 'c', 'd' ]

const items2 = ["a", "b", "c", "d"];
const filtered = items2.filter((item, index) => index !== 1); // keeps all except position 1
console.log("filter result:", filtered); // [ 'a', 'c', 'd' ]


// section Challenge 6
//  will comeback to it 


section("Challenge 7 - Real-World Banking Calculator");

// Formatting settings, reused for every currency value:
// always show exactly 2 decimals, and "en-US" gives commas for thousands (31,286.15)
const money = { minimumFractionDigits: 2, maximumFractionDigits: 2 };

// ======================================================
// Scenario 1 - Savings interest
// ======================================================
section("Scenario 1 - Savings interest");

let P = 25000;   // starting deposit in rand
let r = 0.075;   // 7.5% annual interest as a decimal
let n = 12;      // compounded 12 times a year (monthly)
let t = 3;       // number of years

// Formula: P * (1 + r/n) ^ (n*t)
// ** is the exponent operator, and the brackets make sure (1 + r/n) is worked out first
let finalBalance = P * (1 + r / n) ** (n * t);

// Total interest = what you end up with minus what you put in
let interestEarned = finalBalance - P;

// Effective annual rate: the single yearly growth rate that turns P into finalBalance.
// (finalBalance / P) is the total growth, ** (1 / t) takes the "per year" root,
// minus 1 leaves only the growth, and * 100 turns it into a percentage
let effectiveRate = ((finalBalance / P) ** (1 / t) - 1) * 100;

// toLocaleString adds the commas and the 2 decimals
console.log("Final balance: R " + finalBalance.toLocaleString("en-US", money));     // R 31,286.15
console.log("Interest earned: R " + interestEarned.toLocaleString("en-US", money)); // R 6,286.15
console.log("Effective annual rate: " + effectiveRate.toFixed(2) + "%");            // 7.76%

// Scenario 2 - Tiered account fees (ternary only)

section("Scenario 2 - Tiered account fees");

// ONE ternary chain decides the fee. It checks from the lowest tier up,
// and the first true condition wins:
//   balance < 1000  -> R25
//   balance < 5000  -> R50
//   balance < 25000 -> R75
//   otherwise       -> R0 (fee waived)
// Using "<" (not "<=") means balances with cents, like 999.99, land in the right tier.

let balance1 = 500;
let fee1 = balance1 < 1000 ? 25 : balance1 < 5000 ? 50 : balance1 < 25000 ? 75 : 0;
let annualFee1 = fee1 * 12; // 12 months of fees
console.log("Balance R " + balance1.toLocaleString("en-US", money) + " -> monthly fee R" + fee1 + ", yearly R" + annualFee1);
// Balance R 500.00 -> monthly fee R25, yearly R300

let balance2 = 1500;
let fee2 = balance2 < 1000 ? 25 : balance2 < 5000 ? 50 : balance2 < 25000 ? 75 : 0;
let annualFee2 = fee2 * 12;
console.log("Balance R " + balance2.toLocaleString("en-US", money) + " -> monthly fee R" + fee2 + ", yearly R" + annualFee2);
// Balance R 1,500.00 -> monthly fee R50, yearly R600

let balance3 = 10000;
let fee3 = balance3 < 1000 ? 25 : balance3 < 5000 ? 50 : balance3 < 25000 ? 75 : 0;
let annualFee3 = fee3 * 12;
console.log("Balance R " + balance3.toLocaleString("en-US", money) + " -> monthly fee R" + fee3 + ", yearly R" + annualFee3);
// Balance R 10,000.00 -> monthly fee R75, yearly R900

let balance4 = 50000;
let fee4 = balance4 < 1000 ? 25 : balance4 < 5000 ? 50 : balance4 < 25000 ? 75 : 0;
let annualFee4 = fee4 * 12;
console.log("Balance R " + balance4.toLocaleString("en-US", money) + " -> monthly fee R" + fee4 + ", yearly R" + annualFee4);
// Balance R 50,000.00 -> monthly fee R0, yearly R0


// Scenario 3 - Multi-currency transfer
section("Scenario 3 - Multi-currency transfer");

let rate = 18.42; // R18.42 = $1

// Floating-point care: convert the rand amount to whole CENTS first.
// Integers are stored exactly, so money maths on cents is safe.
// Math.round cleans up any tiny error from the multiplication.
let amountCents = Math.round(15750.33 * 100); // 1575033 cents

// 2.5% commission. Multiplying by 25 and dividing by 1000 avoids using 0.025,
// which cannot be stored exactly in binary. The result is rounded to whole cents.
let commissionCents = Math.round(amountCents * 25 / 1000); // 39376 cents

let afterCommissionCents = amountCents - commissionCents; // 1535657 cents

// Convert to dollars: divide the rand cents by the rate, and round to whole US cents
let usdCents = Math.round(afterCommissionCents / rate); // 83369 cents

// Only at the very end, divide by 100 to get back to rand and dollars
console.log("Commission: R " + (commissionCents / 100).toLocaleString("en-US", money));         // R 393.76
console.log("After commission: R " + (afterCommissionCents / 100).toLocaleString("en-US", money)); // R 15,356.57
console.log("USD received: $" + (usdCents / 100).toLocaleString("en-US", money));  

// Computers store decimals in binary, and many decimals (like 0.1, 0.2
// or 0.025) cannot be stored exactly, so tiny errors appear:
// 0.1 + 0.2 gives 0.30000000000000004, and in my own code
// 15750.33 * 0.025 gives 393.75825000000003 instead of 393.75825.
// A tiny error like this can push a rounded money value up or down by
// a cent, and those cents add up across thousands of transactions.
//
// Where it showed up:
// 1. Scenario 3 (the clearest case): commission and conversion on a
//    decimal amount. I handled it by working in whole cents (integers),
//    using Math.round to get exact cents, and only converting back to
//    rand and dollars when printing.
// 2. Scenario 1: the compound interest formula uses a decimal power, so
//    the result has many digits (31286.153387860195). I did NOT round in
//    the middle of the calculation. I rounded only once, at the end, for
//    display with toLocaleString (2 decimals).
// 3. Scenario 2: the fee tiers use "<" on the balance, so a balance such
//    as 999.99 or 4999.99 still lands in the correct tier.