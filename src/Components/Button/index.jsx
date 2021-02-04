import React from "react";

const Button = ( { content, onClick } ) => (
  <button className="button" onClick={onClick}>
    {content}
  </button>
  );

export default Button;
