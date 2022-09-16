import { useState } from 'react';
import withToggle from './ToggleHoc';
const CollapseExpand = ({ toggleStatus, setToggleStatus }) => {
  const list = [
    { id: 1, name: 'Eggs' },
    { id: 2, name: 'Bread' },
  ];
  //   const [toggleStatus, setToggleStatus] = useState(false);

  return (
    <div style={{ border: '1px solid ', margin: '10px' }}>
      <button type='button' onClick={() => setToggleStatus(!toggleStatus)}>
        Toggle
      </button>
      {toggleStatus && (
        <div>
          {list.map((item) => (
            <p key={item.id}>{item.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

const DecoratedComponent = withToggle(CollapseExpand);
export default DecoratedComponent;
