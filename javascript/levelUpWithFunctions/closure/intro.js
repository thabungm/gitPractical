function test() {
  let message = 'hello';
  // return 'messageHi';
  function innerFn() {
    console.log(message);
  }

  return innerFn;
}
/*
  closure function returns a function aka "inner fn"
  and the inner fn has access to variables of the
  outer function even after the outer fn completes execution

*/
const innerFn = test(); // outer fn completed execution
// console.log(innerFn);
innerFn();

/* // let const var
function printMsg() {
  // var message = 'hello world';
  if (true) {
    var message = 'hello world';
  }
  console.log(message);
}

printMsg();
 */
