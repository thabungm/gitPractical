const ChildComponent = ({ message, onChangeFn }) => {
  return (
    <div>
      <h3>Child component</h3>
      {message}
      <div>
        <input
          type='text'
          onChange={(event) => onChangeFn(event.target.value)}
        />
      </div>
    </div>
  );
};

export default ChildComponent;
