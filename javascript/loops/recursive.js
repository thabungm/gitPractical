const countNumber = function (maxCount, counter) {
  console.log(counter);
  if (counter < maxCount) {
    countNumber(maxCount, counter + 1);
  }
};
countNumber(10, 1);
