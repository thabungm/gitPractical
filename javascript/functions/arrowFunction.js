function computeArea(length, width) {
  return length * width;
}

const computeArrow = (length, width) => {
  return length * width;
};
// console.log(computeArrow(2, 3));

const computeArrowV1 = (length, width) => length * width;
// console.log(computeArrowV1(2, 3));

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
//'this'
const course = {
  name: 'MERN',
  printCourse: function () {
    console.log(this.name);
    const courseInside = () => {
      console.log('courseInside->', this.name);
    };

    courseInside();
  },
};
course.printCourse();
