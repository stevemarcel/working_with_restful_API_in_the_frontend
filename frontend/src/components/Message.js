import React from 'react';
import { Alert } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const Message = ({ variant, children }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
    }, 15000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  if (!show) {
    return null;
  }

  return (
    <Alert variant={variant} className='text-center'>
      {children}
    </Alert>
  );
};

Message.defaultProps = { variant: 'info' };

export default Message;
