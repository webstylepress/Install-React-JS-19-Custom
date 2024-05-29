import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);

