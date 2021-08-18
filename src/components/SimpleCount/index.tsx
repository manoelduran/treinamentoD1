import React, { useState } from 'react';

function SimpleCount() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    alert('Botão foi clicado');
    setCount(count + 1);
  }

  return (
    <div>
      <p>
        Count is: {count}
      </p>
      <button onClick={incrementCount}>Click here to count</button>
    </div>
  );
}

export default SimpleCount;
