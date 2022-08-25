const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const result = document.querySelector('.result');
let counter = 0;
increase.addEventListener('click', function () {
  ++counter;
  result.innerText = counter;
});

decrease.addEventListener('click', function () {
  --counter;
  result.innerText = counter;
});

reset.addEventListener('click', function () {
  counter = 0;
  result.innerText = counter;
});
