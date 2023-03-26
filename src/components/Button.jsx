import React from 'react';

const Button = ({ text, type }) => {
  return (
    <button type={type} className='btn'>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: 'Generate',
  type: 'submit',
};

export default Button;
