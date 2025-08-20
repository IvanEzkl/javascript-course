// // // JavaScript Fundamentals - Part 1
// // // We'll write our code here!
// // let js = "ämazing";
// // console.log(40 + 8 + 23 - 10);

// // console.log("=== VARIABLES ===");
// // let firstName = "Jonas";
// // console.log(firstName);

// // let age = 30;
// // console.log(age);
// // age = 37;
// // console.log(age);

// // const birthYear = 1991;
// // console.log(birthYear);

// // const PI = 3.1415;
// // console.log(PI);

// // var job = "programmer";
// // job = "teacher";
// // console.log(job);

// // const country = "Portugal";
// // const language = "Portugese";
// // const population = 10;

// // let age3 = 25;
// // age = 26;

// // console.log("==== DATA TYPES ====");

// // let weight = 45;
// // console.log(weight);
// // console.log(typeof weight);

// // let username = "Ivan";
// // console.log(username);
// // console.log(typeof username);

// // let javascriptisFun = true;
// // console.log(javascriptisFun);
// // console.log(typeof javascriptisFun);

// // let year;
// // console.log(year);
// // console.log(typeof year);

// // let dynamicVariable = 23;
// // console.log(dynamicVariable, typeof dynamicVariable);

// // dynamicVariable = "Now I'm a string!";
// // console.log(dynamicVariable, typeof dynamicVariable);

// // dynamicVariable = true;
// // console.log(dynamicVariable, typeof dynamicVariable);

// // const FirstName = "Ivan";
// // console.log(FirstName, typeof FirstName);

// // let ageNow = "20";
// // console.log(ageNow, typeof ageNow);


// // const favNumber = "7";
// // console.log(favNumber, typeof favNumber);

// // Ilikejavascript = true;
// // console.log(Ilikejavascript, typeof Ilikejavascript);

// // let score = 100;
// // console.log(score);
// // score = 150;
// // console.log(score);

// // const score1 = 100;
// // console.log(score1);


// // console.log(typeof 42);
// // console.log(typeof "Hello");
// // console.log(typeof true);
// // console.log(typeof undefined);

// // /////////////////////////////////////////////////////////////////////////////////

// // // Basic Operation - Math Operators
// // console.log("==== MATH OPERATORS ====");

// // const now = 2037;
// // const ageJonas = now - 1991;
// // const ageSarah = now - 2018;
// // console.log(ageJonas, ageSarah);

// // console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// // console.log("Math operations:");
// // console.log("Addition: ", 10 + 5);
// // console.log("Subtraction: ", 20 - 8);
// // console.log("Multiplication: ", 48 * 3);
// // console.log("Division: ", 18 / 2);
// // console.log("Exponentiation: ", 5 ** 7);

// // const ifirstName = "Jonas";
// // const lastName = "Schmedtmann";
// // console.log(ifirstName + " " + lastName);

// // console.log("Hello" + "World" + "!");
// // console.log("I am " + 20 + " years old");

// // ////////////////////////////////////
// // // Assignment operators
// // console.log("==== ASSIGNMENT OPERATORS =====");

// // let x = 10 + 5;
// // console.log("x starts as: ", x);

// // x += 10;
// // console.log("After x += 10:", x);


// // x *= 4;
// // console.log("After x *= 4:", x);

// // x /= 2;
// // console.log("After x /= 2:", x);

// // x++;
// // console.log("After x++:", x);

// // x--;
// // x--;
// // console.log("After x++:", x);


// // let newScore = 100;
// // console.log(newScore);

// // newScore += 50;
// // console.log("After newScore += 50:", newScore);

// // newScore *= 2;
// // console.log("After x *= 2:", newScore)

// // newScore -= 25;
// // console.log("After x -= 25:", newScore);

// // newScore++;
// // newScore++;
// // console.log("After x++:", newScore);

// // ////////////////////////////////////
// // // Comparsion opeartors
// // console.log("==== COMPARISON OPERATORS ====");

// // console.log("Age comparison:");
// // console.log(ageJonas > ageSarah);
// // console.log(ageSarah >= 18);
// // console.log(ageJonas < 30);

// // console.log("Number comparison:");
// // console.log(25 > 20);
// // console.log(15 < 10);
// // console.log(18 >= 18);
// // console.log(16 <= 15);

// // const isFullAge = ageSarah >= 18;
// // console.log("Sarah is adult:", isFullAge);

// // const isJonasOlder = ageJonas > ageSarah;
// // console.log("Jonas is older:", isJonasOlder);

// // console.log("Complex comrpasion:");
// // console.log(now - 1991 > now - 2018);

// // console.log(20 >= 18);
// // console.log(100 > 99);

// // const myFullAge = ageIvan >= 20;
// // console.log("Ivan is adult:", myFullAge)

// // const isSarahOlder = ageSarah > ageIvan;
// // console.log("Sarah is Older:", isSarahOlder);


// ///////////////////////////////////////////////////////////
// // Operator Precedence
// console.log("==== OPERATOR PRECEDENCE ====");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// const massMark = 78;
// const massJohn = 92;
// const heightMark = 1.69;
// const heightJohn = 1.95;

// const markBMI = massMark / heightMark ** 2;
// console.log("Mark's BMI: ",markBMI);

// const johnBMI = massJohn / heightJohn ** 2;
// console.log("John's BMI: ",johnBMI);

// const higherBMI = markBMI > johnBMI;
// console.log("Mark has higher BMI: ", higherBMI);


const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`I'm ${2037 - 1991} years old`);
console.log(`Math works: ${2 + 3} equals five`);
console.log(`Comparsion too: ${5 > 3}`);

console.log(`Just a regular string...`);


console.log("String with \n\ multiple \n\ lines");

console.log(`String multiple lines`);


const myName = "Ivan";
const myAge = 20;
const myJob = "3rd Year IT Student";
const currentYear = 2025;
console.log(`Hi I am ${myName} a ${myAge} years old, ${myJob}`);

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

/////////////////////////////////////////////////////
// Truthy and Falsy variables

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0; 
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED"); 
}

if (height !== undefined) {
  console.log("Height is defined");
}

const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

const markBMI = massMark / heightMark ** 2;
console.log("Mark's BMI: ",markBMI);

const johnBMI = massJohn / heightJohn ** 2;
console.log("John's BMI: ",johnBMI);

if (markBMI > johnBMI) {
    console.log(`Marks BMI ${markBMI} is higher than John ${johnBMI}`);
} else {
    console.log(`Johns BMI ${johnBMI} is lower than Mark ${markBMI}`);
}