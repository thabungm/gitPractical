function computeArea(length, width) {
  return length * width;
}

const computeArrow = (length, width) => {
  return length * width;
};
// console.log(computeArrow(2, 3));

const computeArrowV1 = (length, width) => length * width;

function createCourse() {
  const course = {
    name: 'MERN',
    pax: 20,
  };

  return course;
}

// console.log(printObject());

const createCourseArrow = () => {
  const result = {
    name: 'MERN',
    pax: 20,
  };

  return result;
};

const createCourseArrowv2 = () => ({
  name: 'MERN stack',
  pax: 20,
});

// console.log(createCourseArrowv2());
const course = {
  name: 'MERN',
  printCourse: function () {
    console.log(this);
    const printInside = () => {
      /* 
      'this' inside an arrow will refer to the 'this' of 
       the function  where the arrow function is defined
      */
      console.log('inside printinside', this.name);
    };
    printInside();
  },
};

course.printCourse();
