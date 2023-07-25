import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 23,
    message: "Hello Peter",
  });

  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("Hello Peter");

  const changeMessage = () => {
    if (name === "Peter" && age === 23 && message === "Hello Peter") {
      setName("Alperen");
      setAge(24);
      setMessage("Hello World");
    } else {
      setName("peter");
      setAge(23);
      setMessage("Hello Peter");
    }
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button type="button" className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
