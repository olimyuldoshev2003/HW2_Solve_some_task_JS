// Task 1

// function plusTheNumbers(a, b) {
//     return a + b;
// }

// console.log(plusTheNumbers(3, 4));

// Task 2

// function maxNum(a, b, c) {
//     return Math.max(a, b, c);
// }

// console.log(maxNum(3, 4, 5));

// Task 3

// function sum(a) {
//  return a + 2 - a % 2;
// }
// console.log(sum(8));

// Task 4

// function sumOfNum(a, b) {
//     let sum = 0;
//     for(let i = a; i <= b; i++) {
//         sum += i;
//     }

//     return sum;
// }

// console.log(sumOfNum(1, 5));

// Task 5

// function PlusOfThreeDigitsNum(num) {
//     let sum, num1, num2, num3;
//     num1 = parseInt(num / 100);
//     num2 = parseInt((num / 10) % 10);
//     num3 = parseInt(num % 10);
//     sum = num1 + num2 + num3;
//     return sum;
// }

// console.log(PlusOfThreeDigitsNum(123));

//Task 6

// function saparatedEvenNum(a, b) {
//     for(let i = a; i <= b; i++) {
//         if(i % 2 === 0) {
//             console.log(i + " ");
//         }
//     }
// }

// saparatedEvenNum(1, 10);

// Task 7

// function thePerfectSquare(a, b) {
//     for (let i = a; i <= b; i++) {
//       if (Math.sqrt(i) % 1 === 0) {
//         console.log(i + " ");
//       }
//     }
// }

// thePerfectSquare(1, 10);

// Task 8

// function hypotenuseOfTriangle(a, b) {
//     let c = Math.sqrt(a * a + b * b);
//     return c;
// }

// console.log(hypotenuseOfTriangle(3, 4));

// Task 9

// function factorial(n) {
//     let fact = 1;
//     for (let i = 1; i <= n; i++) {
//         fact *= i;
//     }
//     return fact;
// }

// console.log(factorial(5));

// Task 10

//  function isPalindrome(num) {
//     let num1 = parseInt(num / 1000);
//     let num2 = parseInt((num / 100) % 10);
//     let num3 = parseInt((num / 10) % 10);
//     let num4 = parseInt(num % 10);

//     if(num1 === num4 && num2 === num3) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isPalindrome(4334));

//Task 11

// function result(x, d) {
//     let cnt = 0;
//     for (let i = x; i >= 1; parseInt((i /= 10))) {
//       if (parseInt(i % 10) === d) {
//         cnt++;
//       }
//     }
    
//     return cnt;
// }

// console.log(result(444, 4));