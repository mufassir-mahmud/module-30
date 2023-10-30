const max = Math.max(11,22,33,55,88);
console.log(max);

const numbers = [11,22,33,44,55,66,77,98];
console.log(...numbers);
const arrayMax = Math.max(...numbers);
console.log(arrayMax);

const num1 = [11,22,33,44,55];
const num2 = num1;
num2.push(66);
console.log(num1);