const couse1 = {
  name: 'MERN stack',
  contact: {
    helpline: '123-456-7890',
    office: '567d-456-7890',
  },
};
console.log(couse1.contact.helpline);

const couse2 = {
  name: 'MERN stack',
};

console.log(couse2?.contact?.helpline);
