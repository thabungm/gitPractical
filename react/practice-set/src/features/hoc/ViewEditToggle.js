import { useState } from 'react';
import withToggle from './ToggleHoc';

const ViewEditToggle = ({ toggleStatus, setToggleStatus }) => {
  const title = 'Title';
  return (
    <div style={{ border: '1px solid ', margin: '10px' }}>
      {toggleStatus ? <input type='text' value={title} /> : <p>{title}</p>}
      <button type='button' onClick={() => setToggleStatus(!toggleStatus)}>
        Toggle
      </button>
    </div>
  );
};
const DecoratedViewEdit = withToggle(ViewEditToggle);
export default DecoratedViewEdit;
// export default ViewEditToggle;
