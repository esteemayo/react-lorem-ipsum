import React from 'react';

const Input = ({ name, label, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        type='number'
        name={name}
        id={name}
      />
    </div>
  );
};

export default Input;
