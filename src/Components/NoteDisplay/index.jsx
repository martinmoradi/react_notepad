import React from "react";
import Showdown from "showdown";



const NoteDisplay = ({ title, content }) => {
  function createMarkup(text) {
    let converter = new Showdown.Converter();
    text = converter.makeHtml(text);
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
