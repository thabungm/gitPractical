function computeArea(length, width) {
  return length * width;
}

const computeArrow = (length, width) => {
  return length * width;
};
// console.log(computeArrow(2, 3));

const computeArrowV1 = (length, width) => length * width;
// console.log(computeArrowV1(2, 3));

function printObject() {
  const result = {
    name: 'MERN',
    pax: 20,
  };

  return result;
}

// console.log(printObject());

/*
const printObjectArrow = () => {
  const result = {
    name: 'MERN',
    pax: 20,
  };

  return result;
};
*/
const computeArrowV3 = (length, width) => length * width;

const printObjectArrow = () => ({
  name: 'MERN stack',
  pax: 20,
});

console.log(printObjectArrow());
