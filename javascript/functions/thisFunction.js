const printGreetings = function () {
  console.log(this.greeting);
};

const sayMorning = {
  greeting: 'Good morning',
  printGreetings: printGreetings,
};

sayMorning.printGreetings();

const sayGoodNight = {
  greeting: 'Good night',
  printGreetings: printGreetings,
};

sayGoodNight.printGreetings();

/*
const circle = {
  radius: 10,
  perimeter: function () {
    console.log('inside perimeter', this);
  },
};

function test() {
  console.log('inside test', this);
}
const result = circle.perimeter();

test();
*/
