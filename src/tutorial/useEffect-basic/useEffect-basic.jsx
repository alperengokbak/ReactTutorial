import React, { useState, useEffect } from "react";

// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasic = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    // Side effect code goes here
    // This code will run after every render
    // You can also return a cleanup function if needed
    if (value >= 1) {
      document.title = `New Message(${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log("Hi");
  }, []);

  return (
    <>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={() => setValue(value + 1)}>
        Click!
      </button>
    </>
  );
};

export default UseEffectBasic;
