function addNumber(a, b, callback) {
  const result = a + b;
  callback(result);
}

/* addNumber(3, 2, function (final) {
  console.log(final);
}); */

const promise = new Promise(function (resolve, reject) {
  //   resolve('I am resolved');
  reject('Failed state');
}); // pending

// console.log(promise);
promise
  .then(function (result) {
    // resolved state
    console.log(`result is:${result}`);
  })
  .catch((err) => {
    // reject state
    console.log(err);
  });
