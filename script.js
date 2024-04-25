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

const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const calculator = (func, x, y) => {
  return func(x, y);
};

const calc2 = (a, b) => {
  const ttl = a + b;

  const multSqr = (exponent) => {
    return Math.pow(ttl, exponent);
  };
  return multSqr;
};

const total = calc2(2, 3);
const data = 
console.log(total(2))

