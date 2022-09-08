import './style.css';

const TextInput = ({ required, name, placeholder, errorMessage, onChange }) => {
  return (
    <div className='textInput'>
      <input
        onChange={onChange}
        type='text'
        name={name}
        placeholder={placeholder}
        required={required}
      />
      <div className='error'>{errorMessage}</div>
    </div>
  );
};

export default TextInput;
