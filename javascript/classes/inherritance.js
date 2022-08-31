class Person {
  constructor(name) {
    this.name = name;
  }

  welcome() {
    console.log(`Hello ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, rollNo) {
    super(name);
    this.rollNo = rollNo;
  }

  printInfo() {
    console.log(`
    Name: ${this.name}
    Roll: ${this.rollNo}`);
  }
}

const newStudent = new Student('Mike', 'B101');
newStudent.welcome();
newStudent.printInfo();
