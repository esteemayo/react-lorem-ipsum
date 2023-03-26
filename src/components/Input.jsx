import React from 'react';

const Input = ({ name, label, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        id={name}
        name={name}
        type='number'
        name={name}
      />
    </div>
  );
};

export default Input;
