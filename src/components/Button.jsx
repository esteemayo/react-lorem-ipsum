import React from 'react'

const Button = ({ text }) => {
  return (
    <button type='submit' className='btn'>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: 'Generate',
};

export default Button;
