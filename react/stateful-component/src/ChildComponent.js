const ChildComponent = ({ message, onChangeHandler }) => {
  return (
    <div>
      <h3>I am functional child component</h3>
      <div>{message}</div>
      <input
        type='text'
        onChange={(event) => {
          console.log(event.target.value);
          onChangeHandler(event.target.value);
        }}
      />
    </div>
  );
};

export default ChildComponent;
