import React from "react";

const ErrorExample = () => {
  let title = "Random Title";

  const handleClick = () => {
    title = "The best city ever is Miami";
    console.log(title);
    //alert(title);
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Click Me!
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
