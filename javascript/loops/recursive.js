const myLoopyFunction = function (counter, maxCount) {
  console.log(counter);
  if (counter < maxCount) {
    myLoopyFunction(counter + 1, maxCount);
  }
};

myLoopyFunction(0, 10);
