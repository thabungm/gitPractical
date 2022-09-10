import React, { useState } from 'react';
import Modal from './Modal';
import PortalModal from './PortalModal';
import './styles.css';

const PortalDemo = () => {
  const [open, setOpen] = useState(false);
  const [openPortal, setOpenPortal] = useState(false);
  return (
    <div className='container'>
      <div className='button-container'>
        <button className='button' onClick={() => setOpen(true)}>
          Open Modal
        </button>

        <button className='button' onClick={() => setOpenPortal(true)}>
          Open Portal
        </button>
      </div>
      <div>
        <Modal
          message='Hello World!'
          isOpen={open}
          onClose={() => setOpen(false)}
        />
        <PortalModal
          message='Hi World!'
          isOpen={openPortal}
          onClose={() => setOpenPortal(false)}
        />
      </div>
    </div>
  );
};
export default PortalDemo;
