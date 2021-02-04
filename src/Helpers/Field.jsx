import React from "react";

const Field = ({ name, title, onChange }) => (
  <div>
    <input type="text" value={title} onChange={onChange} name={name} />
  </div>
);

export default Field;
