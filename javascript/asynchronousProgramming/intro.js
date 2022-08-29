/* setTimeout(function () {
  console.log('hello world');
}, 2000); */

const intervalRef = setInterval(
  function (message) {
    // console.log(message);
    console.log(new Date());
  },
  1000,
  'hellow'
);

/* setTimeout(function () {
  clearInterval(intervalRef);
  console.log('Cleared');
}, 4000); */
