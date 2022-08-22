const formEl = document.querySelector('form');
const emailFld = document.querySelector("input[name='email']");
const passwordFld = document.querySelector("input[name='password']");
const repasswordFld = document.querySelector("input[name='repassword']");
const fullNameFld = document.querySelector("input[name='fullname']");
const merchantFld = document.querySelector("input[name='merchant']");
const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

let canSubmit = true;

// isValid =true/false
const validateFld = (el, isValid) => {
  if (isValid) {
    canSubmit = true;
    el.parentElement.classList.remove('form-field-error');
  } else {
    canSubmit = false;
    el.parentElement.classList.add('form-field-error');
  }
};

emailFld.addEventListener('keyup', function (evnt) {
  evnt.preventDefault();
  //   console.log(`evnt.target.reportValidity() ${evnt.target.reportValidity()}`);
  validateFld(this, evnt.target.reportValidity());
});

passwordFld.addEventListener('keyup', function (evnt) {
  evnt.preventDefault();

  const result = passwordRegEx.test(evnt.target.value); // true/false
  validateFld(this, result);
});

repasswordFld.addEventListener('keyup', function (evt) {
  evt.preventDefault();
  const result = passwordFld.value === evt.target.value;
  validateFld(this, result);
});

fullNameFld.addEventListener('keyup', function (evt) {
  evt.preventDefault();
  //   evt.target.value = evt.target.value.trimLeft();

  validateFld(this, evt.target.reportValidity());
});

formEl.addEventListener('submit', function (evnt) {
  evnt.preventDefault();
  const getFormValues = [...evnt.target.elements]
    .filter((ele) => ele.type != 'submit' && ele)
    .map((el) => {
      return {
        name: el.getAttribute('name'),
        type: el.type,
        value: el.type === 'checkbox' ? el.checked : el.value,
      };
    });
  //   const getFormValues = evnt.target.elements;

  const isFilled = getFormValues
    .filter((el) => el.type !== 'checkbox')
    .every((el) => el.value !== '');

  if (isFilled && canSubmit) {
    console.log('The form is valid');

    // connect to backend api from here
    // axios.post('abc.com/v1/submit', getFormValues);
  } else {
    console.log('The form is invalid');
  }
});
