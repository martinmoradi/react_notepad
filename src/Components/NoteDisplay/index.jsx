import React from "react";

const NoteDisplay = ({ title, content }) => {
  function createMarkup(text) {
    return { __html: text };
  }

  return (
    <>
      <div>{title}</div>
      <div dangerouslySetInnerHTML={createMarkup(content)} />
    </>
  );
};

export default NoteDisplay;
