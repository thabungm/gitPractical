import axios from 'axios';
import { useState } from 'react';
import TextInput from './TextInput';
import './style.css';

const FormValidation = () => {
  /* const [name, setName] = useState('');
  const [body, setBody] = useState(''); */

  const [success, setSuccess] = useState('');
  const [failure, setFailure] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    body: '',
    privilege: {
      admin: false,
      moderator: false,
      user: false,
    },
  });
  const { name, body, privilege } = formData;

  const [errors, setErrors] = useState({
    name: '',
    body: '',
  });

  const runValidation = (event) => {
    const noError = event.target.reportValidity();
    if (noError) {
      //   delete errors[event.target.name];
      errors[event.target.name] = '';
    } else {
      errors[event.target.name] = 'Invalid input';
    }

    setErrors({ ...errors });
  };

  const onChange = (event) => {
    event.preventDefault();
    runValidation(event);
    debugger;
    setFormData({
      ...formData,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? {
              ...formData[event.target.name],
              [event.target.value]:
                !formData[event.target.name][event.target.value],
            }
          : event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = { name: name, body: body };
      const url = 'https://jsonplaceholder.typicode.com/users';
      await axios.post(url, data);
      setSuccess('Successfuly submitted');
    } catch (error) {
      setFailure('There is an error');

      console.log(error);
    }
  };

  return (
    <>
      <h3>Welcome to form validation</h3>
      <form onSubmit={handleSubmit}>
        <div className='success'> {success}</div>
        <div className='failure'> {failure}</div>
        {/* {JSON.stringify(errors)} */}
        <TextInput
          name='name'
          placeholder='Enter Name'
          onChange={onChange}
          errorMessage={errors.name}
          value={name}
          required
        />
        <TextInput
          name='body'
          value={body}
          placeholder='Enter body'
          onChange={onChange}
          errorMessage={errors.body}
          required={true}
        />
        <div>
          <label>
            Admin
            <input
              name='privilege'
              onChange={onChange}
              checked={privilege.admin}
              value='admin'
              type='checkbox'
            />
          </label>
          <label>
            Moderator
            <input
              name='privilege'
              onChange={onChange}
              checked={privilege.moderator}
              value='moderator'
              type='checkbox'
            />
          </label>
          <label>
            User
            <input
              name='privilege'
              onChange={onChange}
              checked={privilege.user}
              value='user'
              type='checkbox'
            />
          </label>
        </div>
        {JSON.stringify(formData)}

        <button>Submit</button>
      </form>
    </>
  );
};

export default FormValidation;
