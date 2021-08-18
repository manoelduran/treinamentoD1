import React, { useCallback, useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

function FastState() {
  const [value, setValue] = useState(0);
  const valueWithRef = useRef(0);

  useEffect(() => {
    
    const intervalId = setInterval(() => {
          setTimeout(() => {
            setValue((value) => value  + 1);
            valueWithRef.current = valueWithRef.current + 1;   
        }, 1000);
    }, 100);
    return () => clearInterval(intervalId);
  }, [setValue])

  return (
    <div>
        <p>
          Fast State: {value}
          <br />
          Fast State Correct: {valueWithRef.current}
        </p>
    </div>
  );
}

export default FastState;
