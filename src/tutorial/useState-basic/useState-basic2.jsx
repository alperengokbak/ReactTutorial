import React, { useState } from "react";
// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally

const UseStateBasics = () => {
  // console.log(useState());
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);

  const [myText, setText] = useState("USA");
  const handleClick = () => {
    if (myText === "USA") {
      setText("GER");
    } else {
      setText("USA");
    }
    return (
      <React.Fragment>
        <h2>{myText}</h2>
        <button type="button" className="btn" onClick={handleClick}>
          Change Your Life
        </button>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
