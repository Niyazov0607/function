// 1 example

// function salomlashish(ism) {
//     return "Salom, " + ism + "!";
// }

// console.log(salomlashish('Ali'));

// 2 example

// const conunt = function(monthly) {
//     return monthly * 12;
// }
// let yillikMaosh = conunt(900000);
// console.log("yillikMaosh:" + yillikMaosh);

// 3 example

// function multiply(x, y) {
//     return x * y;
// }
// let result = multiply(6, 4);
// console.log(result);

// 4 example

// const sum = (dollar) => {
//     const Currentamount = 12858;
//     return dollar * Currentamount;
// };

// const UZS = sum(100); //masalan 100$ 1,285,800 sum buladi: yoki 200$ va ....
// console.log(UZS);

// 5 example

// const dollar = (sum) => {
//     const Currentamount = 1285800;
//     return sum / Currentamount * 100;
// };

// const USD = dollar(1285800); //masalan  1,285,800 100$  buladi:
// console.log(USD);

// 7 example

// function uzunlik(matn) {
//     return matn.length;
// }
// const length = uzunlik('salom dunyo');
// console.log(length);

// 8 example

// function generateFibonacci(n) {
//     let fibonacci = [0, 1]; // Boshlang'ich qiymatlar
//     for (let i = 2; i < n; i++) {
//         fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
//     }
//     return fibonacci;
// }

// let n = 8;
// console.log(generateFibonacci(n));

// 9 example

// const palindrommi = function(word) {
//     let reversed = word.split('').reverse().join(''); // So‘zni teskari aylantirish
//     return word === reversed
// }
// console.log(palindrommi("level"));

// 10 example

// function yoshniHisobla(tugilganYil) {
//     const currentYear = new Date().getFullYear();
//     const age = currentYear - tugilganYil;
//     return age;
// }

// const age = yoshniHisobla(2006);
// console.log(`Yoshingiz: ${age} yosh`);

// 11 example

// const harfSoni = (satr, harf) => {
//     return satr.split(harf).length - 1;
// };
// const result = harfSoni('javascript', 'a');
// console.log(`Harfin soni: ${result}`);

// 12 example

// const factorial = (n) => {
//     if (n < 0);
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// };
// console.log(factorial(5));

// 13 example

// const teskariRaqam = function(son) {
//     return Number(son.toString().split('').reverse().join(''));
// };

// const result = teskariRaqam(156);
// console.log(`Teskari raqam: ${result}`);

// 14 example

// function findOddDigits(n) {
//     if (n <= 0) {
//         return "Iltimos, musbat butun son kiriting.";
//     }
//     let oddDigits = [];
//     while (n > 0) {
//         const digit = n % 10;
//         if (digit % 2 !== 0) {
//             oddDigits.push(digit);
//         }
//         n = Math.floor(n / 10);
//     }

//     return `Toq raqamlar: ${oddDigits.reverse().join(", ")}`;
// }
// console.log(findOddDigits(123456789));

// 15 example

// function sumOfDigits(n) {
//     if (n <= 0) {
//         return "Iltimos, musbat butun son kiriting.";
//     }

//     let sum = 0;
//     while (n > 0) {
//         const digit = n % 10;
//         sum += digit;
//         n = Math.floor(n / 10);
//     }

//     return `Raqamlar yig'indisi: ${sum}`;
// }

// console.log(sumOfDigits(15));

// 16 example

// function checkDivisibilityByThree(n) {
//     if (n <= 0) {
//         return "Iltimos, musbat butun son kiriting.";
//     }

//     if (n % 3 === 0) {
//         return `${n} 3 - ning darajasi.`;
//     } else {
//         return "3 - ning darajasi emas.";
//     }
// }
// console.log(checkDivisibilityByThree(27));

// 18 example

// function calculateSumOfSquares(n) {
//     if (n <= 0) {
//         return "Iltimos, musbat butun son kiriting.";
//     }

//     let sum = 0;

//     for (let i = 1; i <= n; i++) {
//         sum += i * i;
//     }

//     return `Yig'indi: ${sum}`;
// }

// console.log(calculateSumOfSquares(3));

// 19 example

// function isPerfectSquare(n) {
//     if (n <= 0) {
//         return "Iltimos, musbat butun son kiriting.";
//     }

//     let i = 1;
//     let isPerfect = false; 

//     while (i * i <= n) {
//         if (i * i === n) {
//             isPerfect = true;
//             break;
//         }
//         i++;
//     }
//     return isPerfect ?  `${n} tub emas.`:`${n} tub.`;
// }
// console.log(isPerfectSquare(17));

