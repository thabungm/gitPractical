setTimeout(
  function (message) {
    console.log(message);
  },
  5000,
  'hi'
); //1000ms = 1s

setInterval(
  function (message) {
    // console.log(message);
    console.log(new Date());
  },
  1000,
  'hellow'
);

/* const intervalRef = setInterval(
  function (message) {
    // console.log(message);
    console.log(new Date());
  },
  1000,
  'hellow'
); */

/* setTimeout(function () {
  clearInterval(intervalRef);
  console.log('Cleared');
}, 4000); */
