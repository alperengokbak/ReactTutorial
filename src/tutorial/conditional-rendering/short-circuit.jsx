import React, { useState } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  /* const firstValue = text || "Hello World"; // If the text is "false", displays the "SecondValue".
  const secondValue = text && "Hello World"; // If the text is "false", displays the "FirstValue". */

  return (
    <>
      <h1>{text || "John Doe"}</h1>
      <button
        className="btn"
        onClick={() => {
          setIsError(!isError);
        }}
      >
        Toggle Error
      </button>
      <button
        className="btn"
        type="button"
        onClick={() => {
          if (text === "") {
            setText("Miami");
          } else {
            setText("");
          }
        }}
      >
        Change The Name
      </button>
      {isError ? (
        <p>There is an error...</p>
      ) : (
        <div>
          <h2>There is no error.</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
