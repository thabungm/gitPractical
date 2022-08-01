const couse1 = {
  name: 'MERN stack',
  contact: {
    helpline: '123-456-7890',
    office: '567d-456-7890',
  },
};

const course2 = {
  name: 'Javascript',
};
// if (course2.contact) {
//   console.log(couse2.contact.helpline);
// }
console.log(course2?.contact?.helpline);
