import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const resetValue = () => {
    setValue(0);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button
          type="button"
          className="btn"
          onClick={() => setValue(value + 1)}
        >
          Increase
        </button>
        <button type="button" className="btn" onClick={resetValue}>
          Reset
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => {
            if (value > 0) {
              setValue(value - 1);
            } else {
              throw console.error("Value is negative number");
            }
          }}
        >
          Decrease
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
