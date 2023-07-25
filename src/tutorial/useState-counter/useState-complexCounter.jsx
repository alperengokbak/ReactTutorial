import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const resetValue = () => {
    setValue(0);
  };

  const IncreaseWithDelay = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Complex Counter</h2>
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
        <button type="btn" className="btn" onClick={IncreaseWithDelay}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
