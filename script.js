// Pure Function
// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(2,4));

// IMPURE FUNCTION

// let total = 0;
// const add = (a, b) => {
//   total = a + b;
//   return total;
// };

// console.log(add(2, 4));

// FIRST CLASS AND HIGH ORDER FUNCTION

// const add = (a, b) => {
//   return a + b;
// };

// const sub = (a, b) => {
//   return a - b;
// };

// const calculator = (func, x, y) => {
//   return func(x, y);
// };

// const calc2 = (a, b) => {
//   const ttl = a + b;

//   const multSqr = (exponent) => {
//     return Math.pow(ttl, exponent);
//   };
//   return multSqr;
// };

// const total = calc2(2, 3);
// const data =
// console.log(total(2))

// FUNCTION COMPOSITION

const multSqr = (val, exponent) => {
  return Math.pow(val, exponent);
};

const add = (a, b) => {
  return a + b;
};

const calc3 = (a, b, c) => multSqr(add(a, b), c);

console.log(calc3(2, 4, 2));

// RECUSRSIVE FUNCTION

// let i = 0;
// const counter = () => {
//   console.log(i++);
//   if (i === 10) return;
//   counter();
// };

// console.log(counter());
// console.log(i);
// // console.log(counter());
// // console.log(i);

let sum = 0;
const totaling = (nums) => {
  sum += nums.pop();

  if (!nums.length) {
    return sum;
  }

  return totaling(nums);
};

const nums = [23, 3453, 645, 756, 75];
console.log(totaling(nums));
