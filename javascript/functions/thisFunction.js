const greetMessage = function () {
  console.log(this.greeting);
};

const sayMorning = {
  greeting: 'Good morning',
  printGreetings: greetMessage,
};

// sayMorning.printGreetings();

const sayGoodNight = {
  greeting: 'Good night',
  printGreetings: greetMessage,
};

// sayGoodNight.printGreetings();
// greetMessage.call(sayMorning);
// printGreetings.call(sayGoodNight);
greetMessage();
const newPrintGreeting = greetMessage.bind(sayGoodNight);
newPrintGreeting();

// hoisting
