const formEl = document.querySelector('form');
const emailFld = document.querySelector("input[name='email']");
const passwordFld = document.querySelector("input[name='password']");
const repasswordFld = document.querySelector("input[name='repassword']");
const fullNameFld = document.querySelector("input[name='fullname']");
const merchantFld = document.querySelector("input[name='merchant']");
const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

let canSubmit = true;

// SRP
const validateFld = (el, isValid) => {
  // isValid is true
  if (isValid) {
    canSubmit = true;
    el.parentElement.classList.remove('form-field-error');
    document.querySelector('#submit').removeAttribute('disabled');
  } else {
    canSubmit = false;
    el.parentElement.classList.add('form-field-error');
    document.querySelector('#submit').setAttribute('disabled', true);
  }
};

emailFld.addEventListener('keyup', function (event) {
  event.preventDefault();
  validateFld(this, event.target.reportValidity());
});

passwordFld.addEventListener('keyup', function (event) {
  event.preventDefault();

  validateFld(this, passwordRegEx.test(event.target.value));
});

repasswordFld.addEventListener('keyup', function (event) {
  event.preventDefault();

  const result = passwordFld.value == event.target.value;
  validateFld(this, result);
});

fullNameFld.addEventListener('keyup', function (event) {
  event.preventDefault();

  validateFld(this, event.target.reportValidity());
});

formEl.addEventListener('submit', function (event) {
  event.preventDefault();
  const getFormValues = [...event.target.elements];
  console.log(getFormValues);
  const result = getFormValues
    .filter((el) => el.type != 'submit' && el.type != 'checkbox')

    .map((el) => {
      return {
        name: el.getAttribute('name'),
        value: el.value,
      };
    })
    .every((element) => {
      return element.value !== '';
    });

  //   console.log(result);
  const finalResult = result && canSubmit;
  if (finalResult) {
    // call API
    return console.log('The form is valid');
  } else {
    // display error message
    // document.querySelector('#submit').setAttribute('disabled', true);
    console.log('The form is in-valid');
  }
});
