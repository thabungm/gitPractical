class Person {
  constructor(name) {
    this.name = name;
  }

  welcome() {
    console.log(`Hello ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, rollNumber) {
    super(name); // mandatory
    this.rollNumber = rollNumber;
  }
}

class Teacher extends Person {
  constructor(name, teacherId) {
    super(name);
    this.teacherId = teacherId;
  }
}
const newStudent = new Student('Mike', 'B101');
newStudent.welcome();

/* const newTeacher = new Teacher('Teacher', 'Teacher001');
newTeacher.welcome(); */

/* const newStudent = new Student('Mike', 'B101');
newStudent.welcome();
newStudent.printInfo(); */
