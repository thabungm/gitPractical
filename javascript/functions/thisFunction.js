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
