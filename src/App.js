import React, { useState } from 'react';

import data from './data';
import Button from 'components/Button';
import Input from 'components/Input';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);

    if (count <= 0) {
      amount = 1;
    }

    if (count > 9) {
      amount = 9;
    }

    setText(data.slice(0, amount));
  };

  return (
    <section className='section-center'>
      <h3>Tired of boring lorem ipsum?</h3>
      <form onSubmit={handleSubmit} className='lorem-form'>
        <Input
          id='amount'
          type='number'
          name='amount'
          value={count}
          label='Paragraphs'
          onChange={(e) => setCount(e.target.value)}
        />
        <Button type='submit' text='Generate' />
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
