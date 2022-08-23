// closure function
function greet() {
  let message = 'Hello world';

  return function () {
    console.log(message);
  };
}

/*
    closure function returns a function a.k.a "inner function"
    & the inner function has access to variables 
    of the outer function even after the outer function
    has completed its execution
*/
const printMessage = greet();
printMessage();
