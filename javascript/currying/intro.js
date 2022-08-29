/* const add = (a, b) => {
  return a + b;
};

console.log(add(1, 2));

 */

const add = (a) => {
  function secondFn(b) {
    return a + b;
  }
  return secondFn;
};
// const resultFn = add(1);
const finalResult = add(1)(2);
console.log(finalResult);
/* const resultFn = add(1);
console.log(resultFn(2)); */
