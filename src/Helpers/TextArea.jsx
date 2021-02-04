import React from "react";

const TextArea = ({ content, onChange }) => {
  return (
    <div>
      <textarea content={content} onChange={onChange} rows={30} cols={30} />
    </div>
  );
};

export default TextArea;
