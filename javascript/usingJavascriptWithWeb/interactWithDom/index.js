function readValues() {
  const nameElement = document.getElementById('name');
  const email = document.getElementById('email');

  console.log(nameElement.value);
  console.log(email.value);
  const container = document.getElementById('container');
  container.innerText = `
          Name is: ${nameElement.value}
          Email is: ${email.value}
      `;
}

/* const container = 
  document.getElementsByClassName('container');
  console.log(container);
  
  const ele = document.getElementById('courseName');
  console.log(ele);
   */
