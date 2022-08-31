setTimeout(function () {
  console.log('I am callback 1s');
}, 1000);

setTimeout(function () {
  console.log('I am callback 3s');
}, 3000);

for (let i = 1; i <= 99999; i++) {
  console.log(i);
}
