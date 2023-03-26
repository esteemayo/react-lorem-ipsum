import React, { useState } from 'react';

import data from 'services/textService';
import Input from 'components/Input';

import './App.css';

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
    <section className="section-center">
      <h3>Tired of boring lorem ipsum?</h3>

      <form onSubmit={handleSubmit} className="lorem-form">
        <Input
          type="number"
          name="amount"
          id="amount"
          label="Paragraphs"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />

        <button type="submit" className="btn">
          Generate
        </button>
      </form>

      <article className="lorem-text">
        {text.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </article>
    </section>
  );
}

export default App;
