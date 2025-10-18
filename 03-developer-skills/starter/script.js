// Remember, we're gonna use strict mode in all scripts now!
'use strict';
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
