// // //  console.log('Fundamentals Part 2');

// // //  // functions - Declaration and Expression 

// // //  console.log("=== FUNCTIONS ===");

// // // function logger() {
// // //     console.log("This functions is working");
// // // }

// // // logger();
// // // logger();
// // // logger();

// // // function fruitProcessor(apples, oranges) {
// // //     console.log(apples, oranges);
// // //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// // //     return juice;
// // // }

// // // const appleJuice = fruitProcessor(5, 0);
// // // console.log(appleJuice);

// // // const appleOrangeJuice = fruitProcessor(2, 4);
// // // console.log(appleOrangeJuice);

// // // const juice1 = fruitProcessor(5, 0);

// // // function greetStudent(studentName) {
// // //     return `Hello ${studentName}, welcome to Javascript!`
// // // }
// // // console.log(greetStudent('Ivan'));

// // // function addNumbers (a, b) {
// // //     return a + b;
// // // }

// // // function multiplyNumbers (a, b) {
// // //     return a * b;
// // // }

// // // console.log(addNumbers(7,21));
// // // console.log(multiplyNumbers(30, 3));

// // // //////////////////////////////////
// // // // Function Expressions

// // // const calcAge = function (birthYear) {
// // //     return 2037 - birthYear;
// // // };

// // // const age1 = calcAge(2005);
// // // console.log(age1);

// // // function calcAge2(birthYear, currentYear) {
// // //     const age = currentYear - birthYear;
// // //     return age;
// // // }

// // // const myAge = calcAge(1991, 2037);
// // // const herAge = calcAge(2005, 2037);

// // // console.log(`I am ${myAge} years old`);
// // // console.log(`She is ${herAge} years old`);

// // // function introduce(firstName, lastName, age) {
// // //     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old`;
// // //     return introduction;
// // // }

// // // console.log(introduce("Ivan", "Regodon", 20));
// // // console.log(introduce("Sarah"));

// // // ////////////////////////////////////
// // // // Return Values and Scope

// // // function calcAge3(birthYear) {
// // //  return 2037 - birthYear;
// // // }

// // // function yearsUntilRetirement(birthYear, firstName) {
// // //     const age = calcAge3(birthYear);
// // //     const retirement = 65 - age;
// // //     if (retirement > 0) {
// // //     return `${firstName} retires in ${retirement} years`;
// // // } else {
// // //     return `${firstName} has already retired!`;
// // // }
// // // }



// // // console.log(yearsUntilRetirement(1991, "Jonas"));
// // // console.log(yearsUntilRetirement(1950, "Mike"));


// // // const globarVar = "I am global";

// // // function testScope() {
// // // const localVar = "I am local";
// // // console.log(globarVar);
// // // console.log(localVar);
// // // }

// // // testScope();

// // // console.log(globarVar);

// // // const userName = "Jonas";

// // // function createWelcomeMessage(user) {
// // //     const message = `Welcome back, ${user}!`;
// // //     const timestamp = new Date().toLocaleTimeString();

// // //     return `${message} Current time: ${timestamp}`;
// // // }

// // // console.log(createWelcomeMessage(userName));

// // // // Function to calculate average of 3 scores
// // // function calcAverage(score1, score2, score3) {
// // //   return (score1 + score2 + score3) / 3;
// // // }

// // // // Function to check winner
// // // function checkWinner(avgDolphins, avgKoalas) {
// // //   // Round to one decimal
  

// // //   if (avgDolphins >= 2 * avgKoalas) {
// // //     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
// // //   } else if (avgKoalas >= 2 * avgDolphins) {
// // //     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
// // //   } else {
// // //     return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`;
// // //   }
// // // }

// // // // Test Data 1
// // // let scoreDolphins = calcAverage(44, 23, 71);
// // // let scoreKoalas = calcAverage(65, 54, 49);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // Test Data 2
// // // scoreDolphins = calcAverage(85, 54, 41);
// // // scoreKoalas = calcAverage(23, 34, 27);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));


// // //////////////////////////////////////////
// // //  Arrays - Creation and Access

// // // console.log("=== ARRAYS ====");

// // // const friends = ["Michael", "Steven", "Peter"];
// // // console.log(friends)

// // // const mixed = ["Jonas", 27, true, friends];
// // // console.log(mixed);

// // // const years = new Array(1991, 1984, 2008, 2020);
// // // console.log(years);

// // // console.log(friends[0]);
// // // console.log(friends[1]);
// // // console.log(friends[2]);

// // // console.log(friends.length);

// // // console.log(friends[friends.length - 2]);

// // // friends[1] = "Jay";
// // // console.log(friends);

// // // const firstName = "Jonas";
// // // const jonas = [firstName, "Schmedtmann", 2037 - 1991];
// // // console.log(jonas);

// // // const calcAge = function (birthYear) {
// // //     return 2037 - birthYear;
// // // }

// // // const age = [calcAge(1991), calcAge(1967), calcAge(2002)];
// // // console.log(age);

// // // const hobbies = new Array("Basketball", "Driving", "Eating");
// // // console.log(hobbies);

// // // const numbers = new Array(7, 10000066, 4056, 20, 69);
// // // console.log(numbers[0]);
// // // console.log(numbers[4]);

// // // numbers[1] = 37;
// // // console.log(numbers);

// // // const aboutMe = new Array("Ivan", 20, true);
// // // console.log("About Me:", aboutMe);

// // // ////////////////////////////////////
// // // // Array Methods - Adding Elements

// // // const friends1 = ["Michael", "Steven", "Peter"];

// // // const newLength = friends1.push("Jay");
// // // console.log(friends1);
// // // console.log(newLength);

// // // const popped = friends1.pop();
// // // console.log(popped);
// // // console.log(friends1);

// // // console.log(friends.indexOf("Steven"));
// // // console.log(friends.indexOf("Bob"));


// // // console.log(friends.includes("Steven")); 
// // // console.log(friends.includes("Bob"));


// // // ////////////////////////////////////
// // // // Array Iteration - Loops

// // // for (let i = 0; i < friends.length; i++) {
// // //     console.log(friends[i]);
// // // }

// // // const years1 = [1991, 2007, 1969, 2020];
// // // const ages = [];

// // // for (let i = 0; i < years.length; i++) {
// // //   ages.push(2037 - years[i]);
// // // }
// // // console.log(ages);

// // // friends.forEach(function (friend, index) {
// // //   console.log(`${index}: ${friend}`);
// // // });

// // // // Arrow function version (even cleaner)
// // // friends.forEach((friend, index) => {
// // //   console.log(`Friend ${index + 1}: ${friend}`);
// // // });

// // // const grades = [85, 92, 78, 96, 88, 74];
// // // let total = 0;

// // // for (let i = 0; i < grades.length; i++) {
// // //     total += grades[i];
// // // }
// // // const average = total / grades.length;
// // // console.log(`Average grade: ${average.toFixed(2)}`);

// // // let passedCount = 0;
// // // grades.forEach((grade) => {
// // // if (grade >= 70) passedCount++;
// // // });

// // // console.log(`${passedCount} out of ${grades.length} students passed`);


// // // const grades = [78, 85, 92, 67, 88, 95, 73, 82];


// // // function calculateAverage(grades) {
// // //     let sum = 0;
// // //     for (let i = 0; i < grades.length; i++) {
// // //         sum += grades[i];
// // //     } 
// // //    return sum / grades.lenght; 
// // // };

// // // function findHighestGrade(grades) {
// // //     let highest = grades[0];
// // //     for (let i = 1; i < grades.length; i++) {
// // //         if (grades[i] > highest) {
// // //             highest = grades[i];
// // //         }
// // //     }
// // //     return highest;
// // // }

// // // function findLowestGrade(grades) {
// // //   let lowest = grades[0];
// // //   for (let i = 1; i < grades.length; i++) {
// // //     if (grades[i] < lowest) {
// // //       lowest = grades[i];
// // //     }
// // //   }
// // //   return lowest;
// // // }

// // // function countPassing(grades, passingGrade) {
// // //   let count = 0;
// // //   for (let i = 0; i < grades.length; i++) {
// // //     if (grades[i] >= passingGrade) {
// // //       count++;
// // //     }
// // //   }
// // //   return count;
// // // }

// // // const average = calculateAverage(grades);
// // // const highest = findHighestGrade(grades);
// // // const lowest = findLowestGrade(grades);
// // // const passing = countPassing(grades, 70);

// // // console.log("=== GRADE REPORT ===");
// // // console.log(`Average: ${average.toFixed(2)}`);
// // // console.log(`Highest: ${highest}`);
// // // console.log(`Lowest: ${lowest}`);
// // // console.log(`Passing students: ${passing} out of ${grades.length}`);


// // ////////////////////////////////////
// // // The Array Problem

// // // const jonasArray = [
// // //   "Jonas",
// // //   "Schmedtmann",
// // //   2037 - 1991,
// // //   "teacher",
// // //   ["Michael", "Peter", "Steven"],
// // // ];

// // // console.log(jonasArray[0]); 
// // // console.log(jonasArray[1]); 
// // // console.log(jonasArray[2]);

// // ////////////////////////////////////
// // // Objects - Creation with Object Literal Syntax

// // // console.log("=== OBJECTS ===");

// // // const jonas = {
// // //   firstname: "Jonas",
// // //   lastname: "Schmedtmann",
// // //   age: 2037 - 1991,
// // //   job: "teacher",
// // //   friends: ["Michael", "Peter", "Steven"]
// // // };
// // // console.log(jonas);

// // // const book = {
// // //   title: "The Great Gatsby",
// // //   author: "F. Scott Fitzgerald",
// // //   year: 1925,
// // //   genres: ["Novel", "Historical"],
// // //   isAvailable: true
// // // };

// // // const playlist = {
// // //   name: "Chill Vibes",
// // //   creator: "Ivan",
// // //   songs: ["Sunflower", "Levitating", "Peaches"],
// // //   genre: "Pop"
// // // };

// // // console.log (book.title);
// // // console.log(book['author']);

// // // console.log(playlist.name);
// // // console.log(playlist["creator"]);

// // // book.yearPublished = 1926;
// // // playlist.description = "Relaxing pop songs";

// // // book.isRead = false;
// // // playlist.genre = "Pop/Electronic";

// // // console.log(book);
// // // console.log(playlist);

// // // const listOfYears = [1991, 2007, 1969, 2020];
// // // const shoppingList = ["apples", "bananas", "milk", "bread"];
// // // const testScores = [85, 92, 78, 96, 88];

// // // const person = {
// // //   name: "Jonas",
// // //   age: 46,
// // //   occupation: "teacher",
// // // };

// // // const car = {
// // //   brand: "Toyota",
// // //   model: "Camry",
// // //   year: 2020,
// // //   color: "blue",
// // // };

// // // const student = {
// // //   name: "Sarah",
// // //   grades: [85, 92, 78], 
// // //   address: {
// // //     // Object inside object
// // //     street: "123 Main St",
// // //     city: "New York",
// // //   },
// // // };

// // // console.log(student.grades[0]);
// // // console.log(student.address.city);

// // ////////////////////////////////////
// // // Object Methods

// // const jonas = {
// //   firstName: "Jonas",
// //   lastName: "Schmedtmann",
// //   birthYear: 1991,
// //   job: "teacher",
// //   friends: ["Michael", "Peter", "Steven"],
// //   hasDriversLicense: true,

  
// //   calcAge: function (birthYear) {
// //     return 2037 - birthYear;
// //   },
// // };


// // console.log(jonas.calcAge(1991));
// // console.log(jonas.calcAge(jonas.birthYear));

// // const jonasImproved = {
// //   firstName: "Jonas",
// //   lastName: "Schmedtmann",
// //   birthYear: 1991,
// //   job: "teacher",
// //   friends: ["Michael", "Peter", "Steven"],
// //   hasDriversLicense: true,

// //   calcAge: function () {
// //     console.log(this); 
// //     return 2037 - this.birthYear; 
// //   },
// // };

// // console.log(jonasImproved.calcAge());

// // const jonasAdvanced = {
// //   firstName: "Jonas",
// //   lastName: "Schmedtmann",
// //   birthYear: 1991,
// //   job: "teacher",
// //   friends: ["Michael", "Peter", "Steven"],
// //   hasDriversLicense: true,

// //   calcAge: function () {
// //     this.age = 2037 - this.birthYear; 
// //     return this.age;
// //   },

// //   getSummary: function () {
// //     return `${this.firstName} is a ${this.calcAge()}-year old ${
// //       this.job
// //     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
// //   },
// // };

// // console.log(jonasAdvanced.calcAge());
// // console.log(jonasAdvanced.age);
// // console.log(jonasAdvanced.getSummary());

// // const calculator = {
// //   num1: 10,
// //   num2: 5,
// //   operator: "+",
  
// //   add: function() {
// //     return this.num1 + this.num2;
// //   },

// //   subtract: function() {
// //     return this.num1 - this.num2;
// //   },

// //   multiply: function() {
// //     return this.num1 * this.num2;
// //   },

// //   divide: function() {
// //     return this.num1 / this.num2;
// //   },

// //   calculate: function() {
// //     if (this.operator === "+") return this.add();
// //     if (this.operator === "-") return this.subtract();
// //     if (this.operator === "*") return this.multiply();
// //     if (this.operator === "/") return this.divide();
// //     return "Invalid operator";
// //   },

// //   getResult: function() {
// //     return `${this.num1} ${this.operator} ${this.num2} = ${this.calculate()}`;
// //   },
// // };

// // console.log(calculator.calculate());
// // console.log(calculator.getResult());

// // ////////////////////////////////////
// // // Coding Challenge #3 - User Profile System

// // const user = {
// //   firstName: "Sarah",
// //   lastName: "Johnson",
// //   birthYear: 1995,
// //   location: "New York",
// //   interests: ["photography", "travel", "coding"],
// //   friends: [
// //     { name: "Michael", status: "active" },
// //     { name: "Emma", status: "inactive" },
// //     { name: "David", status: "active" },
// //   ],
// //   isActive: true,


// //   calcAge: function () {
// //     this.age = new Date().getFullYear() - this.birthYear;
// //     return this.age;
// //   },


// //   addFriend: function (name, status = "active") {
// //     this.friends.push({ name, status });
// //     return this.friends.length;
// //   },


// //   getActiveFriends: function () {
// //     return this.friends.filter(friend => friend.status === "active").length;
// //   },


// //   toggleStatus: function () {
// //     this.isActive = !this.isActive;
// //     return this.isActive;
// //   },

  
// //   getSummary: function () {
// //     this.calcAge();
// //     return ` ${this.firstName} ${this.lastName} (${this.age} years old)
// // Location: ${this.location}
// // Status: ${this.isActive ? "Active" : "Inactive"}
// //  Friends: ${this.friends.length} total, ${this.getActiveFriends()} active
// // Interests: ${this.interests.join(", ")}`;
// //   },
// // };

// // document.addEventListener("DOMContentLoaded", function () {
// //   const score1 = document.getElementById("score-1");
// //   const score2 = document.getElementById("score-2");
// //   const btnAdd1 = document.querySelector('.btn-add[data-player="1"]');
// //   const btnAdd2 = document.querySelector('.btn-add[data-player="2"]');
// //   const btnReset = document.getElementById("btn-reset");
// //   const winningScoreInput = document.getElementById("winning-score");
// //   const statusText = document.querySelector(".status");
// //   const targetSpan = document.querySelector(".target");


// //   const winnerMsg = document.querySelector(".winner");
// //   const winnerNameSpan = document.querySelector(".winner-name");

// //   let p1Score = 0;
// //   let p2Score = 0;
// //   let winningScore = parseInt(winningScoreInput.value);
// //   let gameOver = false;

// //   function updateStatus() {
// //     targetSpan.textContent = winningScore;
// //     statusText.textContent = `First to ${winningScore} wins!`;
// //   }

// //   function checkWinner() {
// //     if (p1Score >= winningScore) {
// //       gameOver = true;
// //       winnerMsg.classList.remove("hidden");
// //       winnerNameSpan.textContent = "Player 1";
// //       btnAdd1.disabled = true;
// //       btnAdd2.disabled = true;
// //     } else if (p2Score >= winningScore) {
// //       gameOver = true;
// //       winnerMsg.classList.remove("hidden");
// //       winnerNameSpan.textContent = "Player 2";
// //       btnAdd1.disabled = true;
// //       btnAdd2.disabled = true;
// //     }
// //   }

// //   btnAdd1.addEventListener("click", function () {
// //     if (!gameOver) {
// //       p1Score++;
// //       score1.textContent = p1Score;
// //       checkWinner();
// //     }
// //   });

// //   btnAdd2.addEventListener("click", function () {
// //     if (!gameOver) {
// //       p2Score++;
// //       score2.textContent = p2Score;
// //       checkWinner();
// //     }
// //   });

// //   // Reset game
// //   btnReset.addEventListener("click", function () {
// //     p1Score = 0;
// //     p2Score = 0;
// //     score1.textContent = p1Score;
// //     score2.textContent = p2Score;
// //     gameOver = false;
// //     winnerMsg.classList.add("hidden");
// //     btnAdd1.disabled = false;
// //     btnAdd2.disabled = false;
// //   });

// //   // Change winning score
// //   winningScoreInput.addEventListener("change", function () {
// //     winningScore = parseInt(this.value);
// //     updateStatus();
// //     btnReset.click();
// //   });

// //   updateStatus();
// // });

// ////////////////////////////////////
// // Professional Development Environment Setup
// // console.log("=== DEVELOPMENT ENVIRONMENT SETUP ===");

// // const messyExample = function (name, age) {
// //   if (age >= 18) {
// //     return "Hello " + name + ", you are an adult";
// //   } else {
// //     return "Hello " + name + ", you are a minor";
// //   }
// // };

// // console.log("Current messy code example:", messyExample("John", 25));
// // console.log("Goal: Automatic formatting, auto-refresh, and typing shortcuts");

// // ////////////////////////////////////
// // // Extension Installation Test

// // function testExtensions() {
// //   const extensionTests = [
// //     { name: "Prettier", status: "installed", purpose: "code formatting" },
// //     { name: "Live Server", status: "installed", purpose: "auto refresh" },
// //     {
// //       name: "Auto Rename Tag",
// //       status: "installed",
// //       purpose: "HTML efficiency",
// //     },
// //   ];

// //   return extensionTests;
// // }

// // const extensionStatus = testExtensions();
// // console.log("Extension installation status:", extensionStatus);

// // const prettierTest = {
// //   firstName: "Sarah",
// //   lastName: "Johnson",
// //   skills: ["JavaScript", "React", "Node.js"],
// //   isActive: true,
// // };

// // const messyFunction = function (x, y, z) {
// //   if (x > 0 && y > 0) {
// //     return x + y + z;
// //   } else {
// //     return 0;
// //   }
// // };

// // const messyArrow = (items) => {
// //   return items.map((item) => {
// //     return item.toUpperCase();
// //   });
// // };

// // console.log(
// //   "Before Prettier formatting - this code works but looks unprofessional"
// // );

// // const calcTempAmplitude = function (temps) {
// //   let max = temps[0];
// //   let min = temps[0];

// //   for (let i = 0; i < temps.length; i++) {
// //     const curTemp = temps[i];
// //     if (typeof curTemp !== "number") continue;

// //     if (curTemp > max) max = curTemp;
// //     if (curTemp < min) min = curTemp;
// //   }

// //   console.log(max, min);
// //   return max - min;
// // };

// // const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// // const amplitude = calcTempAmplitude(temperatures);
// // console.log(amplitude);


// // const calcTempAmplitudeNew = function (t1, t2) {
// //   const temps = t1.concat(t2);
// //   console.log(temps);

// //   let max = temps[0];
// //   let min = temps[0];

// //   for (let i = 0; i < temps.length; i++) {
// //     const curTemp = temps[i];
// //     if (typeof curTemp !== "number") continue;

// //     if (curTemp > max) max = curTemp;
// //     if (curTemp < min) min = curTemp;
// //   }

// //   console.log(max, min);
// //   return max - min;
// // };

// // const array1 = [3, 5, 1];
// // const array2 = [9, 0, 5];
// // const amplitudeNew = calcTempAmplitudeNew(array1, array2);
// // console.log(amplitudeNew);

// // console.log(
// //   "Problem-solving framework applied successfully to extended challenge!"
// // );

// // function demonstrateConsoleDebugging(data) {
// //   console.group("Debugging Session");

// //   console.log("Input data:", data);

// //   if (typeof data !== "object") {
// //     console.warn("Warning: Expected object, got", typeof data);
// //   }

// //   console.table(data);
// //   console.groupEnd();

// //   return Array.isArray(data) ? data.length : Object.keys(data).length;
// // }

// // // Test console debugging with different data types
// // const arrayData = [1, 2, 3, 4, 5];
// // const objectData = { name: "John", age: 30, city: "New York" };

// // demonstrateConsoleDebugging(arrayData);
// // demonstrateConsoleDebugging(objectData);

// // function stepThroughDebugging(numbers) {
// //   debugger; // This will pause execution in browser dev tools

// //   let sum = 0;
// //   let count = 0;

// //   for (let i = 0; i < numbers.length; i++) {
// //     const currentNumber = numbers[i];

// //     console.log(`Processing index ${i}: value = ${currentNumber}`);

// //     if (typeof currentNumber === "number") {
// //       sum += currentNumber;
// //       count++;
// //     } else {
// //       console.error(`Invalid number at index ${i}:`, currentNumber);
// //     }
// //   }

// //   const average = count > 0 ? sum / count : 0;
// //   console.log("Final results:", { sum, count, average });

// //   return average;
// // }

 
// // const mixedNumbers = [10, 20, "error", 30, null, 40];
// // const debugResult = stepThroughDebugging(mixedNumbers);
// // console.log("Debug session result:", debugResult);

// // function calculateAverageScoreFixed(scores) {
// //   // STEP 5 - PREVENT: Add input validation
// //   if (!Array.isArray(scores) || scores.length === 0) {
// //     console.error("Invalid input: scores must be a non-empty array");
// //     return 0;
// //   }

  
// //   let total = 0; 

// //   for (let i = 0; i < scores.length; i++) {
    
// //     if (typeof scores[i] === "number") {
// //       total += scores[i];
// //     } else {
// //       console.warn(`Skipping non-number value at index ${i}:`, scores[i]);
// //     }
// //   }

  
// //   return total / scores.length; 
// // }


// // const fixedResult = calculateAverageScoreFixed(testScores);
// // console.log("Fixed result:", fixedResult);

// // console.group("Debugging Verification Tests");

// // const normalScores = [85, 92, 78, 96, 88];
// // const normalResult = calculateAverageScoreFixed(normalScores);
// // console.log("Normal case result:", normalResult);

// // const mixedScores = [85, "invalid", 92, null, 78];
// // const mixedResult = calculateAverageScoreFixed(mixedScores);
// // console.log("Mixed data result:", mixedResult);

// // const errorResult = calculateAverageScoreFixed("not an array");
// // console.log("Error case result:", errorResult);

// // const emptyResult = calculateAverageScoreFixed([]);
// // console.log("Empty array result:", emptyResult);

// // console.groupEnd();

// // console.log("Systematic debugging process successfully applied!");
// // console.log(
// //   "All bugs identified, isolated, investigated, fixed, and prevented"
// // );

// // Developer Skills Hour 4 - Advanced Problem-Solving & Real-World Challenges
// console.log("=== HOUR 4: ADVANCED PROBLEM-SOLVING MASTERY ===");

// console.log("Ready to tackle complex problems using systematic approaches");
// console.log("Challenge: Build solutions that work under pressure");

// function printForecast(arr) {
    
//     if (!Array.isArray(arr) || arr.length === 0) {
//         return "Error: Please provide a valid array of temperatures";
//     }

    
//     let forecast = arr
//         .map((temp, index) => `${temp}°C in ${index + 1} days`)
//         .join("...");

    
//     return "..." + forecast + "...";
// }


// const test1 = [17, 21, 23];
// const test2 = [12, 5, -5, 0, 4];

// console.log("=== WEATHER FORECAST TEST ===");
// console.log("Test 1:", printForecast(test1));
// console.log("Test 2:", printForecast(test2));



// function analyzeWorkWeek(dailyHours) {
    
//     const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);

    
//     const averageHours = Math.round((totalHours / dailyHours.length) * 10) / 10;

//     const maxHours = Math.max(...dailyHours);
//     const maxDayIndex = dailyHours.indexOf(maxHours);
//     const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//     const maxDay = days[maxDayIndex];

//     const daysWorked = dailyHours.filter(hours => hours > 0).length;

//     const isFullTime = totalHours >= 35;

//     return {
//         totalHours,
//         averageHours,
//         maxDay,
//         daysWorked,
//         isFullTime
//     };
// }


// const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
// const analysis = analyzeWorkWeek(weeklyHours);
// console.log('Work week analysis:', analysis);

// console.log('Challenge completed under time pressure!');

// function legacyForecastFunction(temperatures) {
//     var result = "";
//     for (var i = 1; i <= temperatures.length; i++) {
//         result = result + temperatures[i] + " degrees in day " + i + ", ";
//     }
//     return result;
// }

// const testData = [15, 18, 22, 19];
// console.log("Buggy function output:", legacyForecastFunction(testData));

// function enhancedForecastFunction(temperatures, options = {}) {
//     if (!Array.isArray(temperatures) || temperatures.length === 0) {
//         console.error("Invalid input: temperatures must be a non-empty array");
//         return "";
//     }

//     const { unit = "°C", separator = "...", includeIndex = true } = options;
//     let result = "";

//     for (let i = 0; i < temperatures.length; i++) {
//         const dayNumber = includeIndex ? i + 1 : i;
//         result += `${temperatures[i]}${unit} in ${dayNumber} days${separator}`;
//     }

//     return separator + result.slice(0, -separator.length);
// }

// console.log("Enhanced function (default):", enhancedForecastFunction(testData));
// console.log("Enhanced function (custom):", enhancedForecastFunction(testData, {
//     unit: "°F",
//     separator: " | ",
//     includeIndex: true,
// }));

// console.log("🎯 Complete developer skills successfully applied!");
// console.log("Legacy code debugged, fixed, and enhanced systematically");
