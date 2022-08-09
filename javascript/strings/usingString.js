const message = 'Hello world';
// console.log(message.length);
/* console.log(message.includes("hello"));
console.log(message.toLowerCase());
console.log(message.toUpperCase());
console.log(message.charAt(10)); */
// console.log(message.repeat(2));

/* const input = ["HELLO world", "Jack and Jill"];
// Write a function to return the elements which has "hello" in it
// expected output : ["hello world"]
const finalResult = input.filter(function (ele) {
  const result = ele.toLowerCase().includes("Hello".toLowerCase());
  if (result) {
    return true;
  } else {
    return false;
  }
});
console.log(finalResult); */

// console.log(input.filter((ele) => ele.includes("hello")));

//write function print ratings, it accepts number between 1 to 5
// 1-> *
// 2 -> **
// invalid input if number out of limit(1 to 5)
const printRating = function (number) {
  // if ()
  console.log('*'.repeat(number));
  // for (let i = 1; i <= 5; i++) {
  //   console.log("*".repeat(i));
  // }
};
// printRating(12);

/* let ratings = function (stars) {
  if (stars > 5 || stars < 1) {
    console.log("Invalid input");
    return;
  }

  const str = "*";
  console.log(str.repeat(stars));
}; */

let ratings = function (stars) {
  return stars > 5 || stars < 1
    ? console.log('Invalid input')
    : console.log('*'.repeat(stars));
};

ratings(3);
