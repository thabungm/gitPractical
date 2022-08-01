const circle = {
  radius: 10,
  perimeter: function () {
    function innerFunction() {
      console.log('inside innerFunction', this);
    }
    innerFunction();
    console.log('inside perimeter', this);
    // return 2 * 3.14 * this.radius;
  },
};

const result = circle.perimeter();
