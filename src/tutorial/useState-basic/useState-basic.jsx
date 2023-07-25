import React, { useState } from "react";

const UseStateBasics = () => {
  const [myText, setText] = useState("USA");
  const handleClick = () => {
    if (myText === "USA") {
      setText("GER");
    } else {
      setText("USA");
    }
  };

  return (
    <React.Fragment>
      <h2>{myText}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Your Life
      </button>
    </React.Fragment>
  );
};
export default UseStateBasics;
